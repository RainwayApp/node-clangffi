import {
  createIndex,
  Cursor,
  CXIndex,
  ParseOptions,
  VisitorUserData,
  parse,
  visit,
  CXChildVisitResult,
  EnumConstantDecl,
  EnumDecl,
  Decl,
  FunctionDecl,
  StructDecl,
  FieldDecl,
  ParamDecl,
  TypedefDecl,
  CXCursorKind,
  CXTypeKind,
} from "libclang-bindings";
import { ISourceGenerator } from "./types";
import debug from "debug";
import { formatPath, resolveName } from "./util";
import path from "path/posix";

const log = debug("clangffi:parser");

/**
 * Options for the parser
 */
export interface ParserOptions extends Omit<ParseOptions, "index"> {
  /**
   * File to output bindings to
   */
  outputPath: string;

  /**
   * If specified, additional files that will contribute to the the bindings
   * If not specified, only symbols directly in the `path` file will be included
   */
  additionalFiles: string[];

  /**
   * The source generator to use
   */
  generator: ISourceGenerator;
}

/**
 * The parser
 */
export class Parser {
  private index: CXIndex;

  /**
   * Default ctor
   * @param opts options
   */
  constructor(private opts: ParserOptions) {
    this.index = createIndex();
  }

  /**
   * Parses and generates source
   */
  public parseAndGenerate() {
    const translationUnit = parse({ ...this.opts, index: this.index });

    // open the generator
    this.opts.generator.open(this.opts.outputPath);

    // we need to bind so that `this` is correctly pointing at our instance of parser
    // inside the `visit` method when it's executed
    visit(translationUnit, this.visit.bind(this));

    // close the generator
    this.opts.generator.close();
  }

  /**
   * Visitor for the AST
   * @param cur the current cursor
   * @param parent the parent cursor
   * @param userData user data (always unused)
   * @returns result indicating if we should continue walking the AST or not
   */
  private visit(
    cur: Cursor,
    parent: Cursor,
    userData: VisitorUserData
  ): CXChildVisitResult {
    try {
      const decl = Decl.CreateTypedDecl(cur, parent);

      if (!decl) {
        return CXChildVisitResult.CXChildVisit_Continue;
      }

      const sp = formatPath(decl.sourcePath);

      // skip symbols that aren't in our purview
      if (
        sp != this.opts.path &&
        !this.opts.additionalFiles.some((f) => formatPath(f) == sp)
      ) {
        log(`skip '${resolveName(decl)}' from '${sp}'.`);
        return CXChildVisitResult.CXChildVisit_Continue;
      }

      // openers
      if (decl instanceof EnumDecl) {
        this.opts.generator.openEnum(decl as EnumDecl);
      } else if (decl instanceof EnumConstantDecl) {
        this.opts.generator.openEnumConstant(decl as EnumConstantDecl);
      } else if (decl instanceof StructDecl) {
        this.opts.generator.openStruct(decl as StructDecl);
      } else if (decl instanceof FieldDecl) {
        this.opts.generator.openStructField(decl as FieldDecl);
      } else if (decl instanceof FunctionDecl) {
        this.opts.generator.openFunction(decl as FunctionDecl);
      } else if (decl instanceof ParamDecl) {
        this.opts.generator.openFunctionParam(decl as ParamDecl);
      }

      // if it's a parent type, walk the interior
      if (
        decl instanceof EnumDecl ||
        decl instanceof FunctionDecl ||
        decl instanceof StructDecl
      ) {
        // we need to bind so that `this` is correctly pointing at our instance of parser
        // inside the `visit` method when it's executed
        visit(decl, this.visit.bind(this));
      }

      // special case for typedefs
      if (decl instanceof TypedefDecl) {
        const td = decl as TypedefDecl;

        // elaborated types will be auto walked already
        // for non elaborate types we need to manually walk em
        if (td.underlyingTypeClass.kind != CXTypeKind.CXType_Elaborated) {
          this.opts.generator.openTypedef(td);
          visit(decl, this.visit.bind(this));
          this.opts.generator.closeTypedef(td);
        }
      }

      // closers
      if (decl instanceof EnumDecl) {
        this.opts.generator.closeEnum(decl as EnumDecl);
      } else if (decl instanceof EnumConstantDecl) {
        this.opts.generator.closeEnumConstant(decl as EnumConstantDecl);
      } else if (decl instanceof StructDecl) {
        this.opts.generator.closeStruct(decl as StructDecl);
      } else if (decl instanceof FieldDecl) {
        this.opts.generator.closeStructField(decl as FieldDecl);
      } else if (decl instanceof FunctionDecl) {
        this.opts.generator.closeFunction(decl as FunctionDecl);
      } else if (decl instanceof ParamDecl) {
        this.opts.generator.closeFunctionParam(decl as ParamDecl);
      }
    } catch (e) {
      log(e);

      // TODO(bengreenier): can we handle this better?
      throw e;
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  }
}
