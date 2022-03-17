import fs from "node:fs";
import debug from "debug";
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
  UnionDecl,
  FieldDecl,
  ParamDecl,
  TypedefDecl,
  CXTypeKind,
} from "libclang-bindings";
import { ISourceGenerator } from "./types.js";
import { formatPath, resolveName } from "./util.js";
import { matches, SelectorData } from "./selector.js";

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
   * The source generator to use
   */
  generator: ISourceGenerator;

  /**
   * Symbol config
   */
  symbols: {
    /**
     * Flag indicating if we should include 'default' symbols
     *
     * This means symbols that are defined in the source file we are parsing
     */
    default: boolean;

    /**
     * Files to explicitly include symbols from
     */
    files: string[];

    /**
     * Symbols to explicitly include
     */
    include: SelectorData[];

    /**
     * Symbols to explicitly exclude
     *
     * Overrides `include`.
     */
    exclude: SelectorData[];
  };
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
      const symbolName = resolveName(decl);

      const isAllowedSymbol =
        // if we're accepting default symbols and it's a symbol from our input file
        (this.opts.symbols.default && sp == formatPath(this.opts.path)) ||
        // if it's from a file we're explicitly including
        this.opts.symbols.files.some((filePath) => {
          if (fs.lstatSync(filePath).isDirectory()) {
            // if we include a directory and we're a file inside the directory
            return sp.startsWith(formatPath(filePath));
          } else {
            // if we include a file and we are that file
            return sp == formatPath(filePath);
          }
        }) ||
        // if it's explicitly included
        (symbolName &&
          this.opts.symbols.include.some((sel) => matches(symbolName, sel)));

      // however, if it's excluded explicitly that takes precedence
      if (
        isAllowedSymbol &&
        symbolName &&
        this.opts.symbols.exclude.length > 0 &&
        this.opts.symbols.exclude.some((sel) => matches(symbolName, sel))
      ) {
        log(`skip '${symbolName}' from '${sp}' as it's explicitly excluded.`);
        return CXChildVisitResult.CXChildVisit_Continue;
      }

      // skip symbols that aren't in our purview
      if (!isAllowedSymbol) {
        log(`skip '${symbolName}' from '${sp}'.`);
        return CXChildVisitResult.CXChildVisit_Continue;
      }

      log(`processing '${symbolName}'`);

      // openers
      if (decl instanceof EnumDecl) {
        this.opts.generator.openEnum(decl as EnumDecl);
      } else if (decl instanceof EnumConstantDecl) {
        this.opts.generator.openEnumConstant(decl as EnumConstantDecl);
      } else if (decl instanceof StructDecl) {
        this.opts.generator.openStruct(decl as StructDecl);
      } else if (decl instanceof UnionDecl) {
        this.opts.generator.openUnion(decl as UnionDecl);
      } else if (decl instanceof FieldDecl) {
        this.opts.generator.openField(decl as FieldDecl);
      } else if (decl instanceof FunctionDecl) {
        this.opts.generator.openFunction(decl as FunctionDecl);
      } else if (decl instanceof ParamDecl) {
        this.opts.generator.openFunctionParam(decl as ParamDecl);
      }

      // if it's a parent type, walk the interior
      if (
        decl instanceof EnumDecl ||
        decl instanceof FunctionDecl ||
        decl instanceof StructDecl ||
        decl instanceof UnionDecl
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
      } else if (decl instanceof UnionDecl) {
        this.opts.generator.closeUnion(decl as UnionDecl);
      } else if (decl instanceof FieldDecl) {
        this.opts.generator.closeField(decl as FieldDecl);
      } else if (decl instanceof FunctionDecl) {
        this.opts.generator.closeFunction(decl as FunctionDecl);
      } else if (decl instanceof ParamDecl) {
        this.opts.generator.closeFunctionParam(decl as ParamDecl);
      }

      log(`finished '${symbolName}'`);
    } catch (e) {
      log(e);

      // TODO(bengreenier): can we handle this better?
      throw e;
    }
    return CXChildVisitResult.CXChildVisit_Continue;
  }
}
