import { writeFileSync } from "node:fs";
import prettier from "prettier";
import debug from "debug";
import {
  DesugaredType,
  EnumConstantDecl,
  EnumDecl,
  FieldDecl,
  FunctionDecl,
  ParamDecl,
  StructDecl,
  Type,
  TypedefDecl,
} from "libclang-bindings";
import { StringBuilder } from "../string-builder.js";
import {
  ISourceGenerator,
  ITypeNameResolver,
  LineEndings,
  SymbolReplacementSpec,
} from "../types.js";
import { RefResolver, resolveType, TSResolver } from "./resolve.js";
import { resolveName } from "../util.js";
import { matches } from "../selector.js";

const log = debug("clangffi:tsgen");

/**
 * Typescript generation options
 */
export interface TsGenOptions {
  /**
   * The endings to use
   */
  lineEndings: LineEndings;

  /**
   * Flag indicating if we should format the source with prettier
   */
  usePrettier: boolean;

  /**
   * Symbol options
   */
  symbols: {
    /**
     * Symbol remaps from name => native type
     */
    remap: SymbolReplacementSpec[];

    /**
     * Symbol remaps from name => literal node type
     */
    hardRemap: SymbolReplacementSpec[];
  };
}

/**
 * Typescript source generator
 */
export class TsGen implements ISourceGenerator {
  private outputPath?: string;
  private typingsBuilder: StringBuilder;
  private nativeBuilder: StringBuilder;
  private fnBuilder: StringBuilder;

  private tsResolver = new TSResolver();
  private refResolver = new RefResolver();

  /**
   * Default constructor
   * @param opts options
   */
  constructor(private opts: TsGenOptions) {
    this.typingsBuilder = new StringBuilder(opts.lineEndings);
    this.nativeBuilder = new StringBuilder(opts.lineEndings);
    this.fnBuilder = new StringBuilder(opts.lineEndings);

    this.typingsBuilder.appendLine(`import ffi from "ffi-napi";`);
    this.typingsBuilder.appendLine(
      `import ref, {Pointer as TypedPointer} from "ref-napi";`
    );
    this.typingsBuilder.appendLine(
      `import refStructDi, {StructObject} from "ref-struct-di";`
    );
    this.typingsBuilder
      .appendLine(`import refArrayDi, {TypedArray} from "ref-array-di";
    `);
    this.typingsBuilder.appendLine(`const Struct = refStructDi(ref);`);
    this.typingsBuilder.appendLine(`const Array = refArrayDi(ref);`);
    this.typingsBuilder.appendLine(`const Pointer = ref.refType;`);

    this.fnBuilder.appendLine(`export function dlopen(libPath: string) {`);
    this.fnBuilder.appendLine(`return ffi.Library(libPath, {`);
  }

  public open(outputPath: string) {
    log(`open(${outputPath}): begin`);

    this.outputPath = outputPath;

    log(`open(${outputPath}): end`);
  }

  public close() {
    log(`close(): begin`);

    if (!this.outputPath) {
      throw new Error(`close() called before open()`);
    }

    // close out the fnBuilder ffiLibrary object
    this.fnBuilder.appendLine("});");

    // close out the fnBuilder dlopen fn body
    this.fnBuilder.appendLine("}");

    let txt =
      this.typingsBuilder.toString() +
      this.nativeBuilder.toString() +
      this.fnBuilder.toString();

    if (this.opts.usePrettier) {
      txt = prettier.format(txt, {
        parser: "typescript",
      });
    }

    writeFileSync(this.outputPath, txt);

    log(`close() wrote ${this.outputPath}`);
    log("close(): end");
  }

  public openEnum(decl: EnumDecl) {
    const name = resolveName(decl);

    log(`openEnum(${name}): begin`);

    const backingType = decl.backingType;
    const refType = this.resolveType(name, backingType, this.refResolver);

    this.typingsBuilder.appendLine(`export enum ${name} {`);

    // contribute a native type for ref,
    this.nativeBuilder.appendLine(`export const ${name}Def = ${refType};`);

    log(`openEnum(${name}): end`);
  }

  public openEnumConstant(decl: EnumConstantDecl) {
    const name = resolveName(decl);
    log(`openEnumConstant(${name}): begin`);

    const val = decl.isSigned ? decl.initVal : decl.unsignedInitVal;
    this.typingsBuilder.appendLine(`${name} = ${val},`);

    log(`openEnumConstant(${name}): end`);
  }

  public closeEnumConstant(decl: EnumConstantDecl) {
    // nothing to do
  }

  public closeEnum(decl: EnumDecl) {
    const name = resolveName(decl);
    log(`closeEnum(${name}): begin`);

    this.typingsBuilder.appendLine("}");

    log(`closeEnum(${name}): end`);
  }

  public openTypedef(decl: TypedefDecl) {
    const name = resolveName(decl);
    log(`openTypedef(${name}): begin`);

    this.typingsBuilder.appendLine(
      `export type ${name} = ${this.resolveType(
        name,
        decl.underlyingTypeClass,
        this.tsResolver
      )};`
    );

    const refType = this.resolveType(
      name,
      decl.underlyingTypeClass,
      this.refResolver
    );
    this.nativeBuilder.appendLine(`export const ${name}Def = ${refType};`);

    log(`openTypedef(${name}): end`);
  }

  public closeTypedef(decl: TypedefDecl) {
    // nothing to do
  }

  public openStruct(decl: StructDecl) {
    const name = resolveName(decl);
    log(`openStruct(${name}): begin`);

    this.typingsBuilder.appendLine(
      `export type ${name}Type = StructObject<${name}>;`
    );
    this.typingsBuilder.appendLine(`export interface ${name} {`);
    this.nativeBuilder.appendLine(`export const ${name}Def = Struct({`);

    log(`openStruct(${name}): end`);
  }

  public openStructField(decl: FieldDecl) {
    const name = resolveName(decl);
    log(`openStructField(${name}): begin`);

    this.typingsBuilder.appendLine(
      `${name}: ${this.resolveType(name, decl.typeClass, this.tsResolver)};`
    );
    this.nativeBuilder.appendLine(
      `${name}: ${this.resolveType(name, decl.typeClass, this.refResolver)},`
    );

    log(`openStructField(${name}): end`);
  }

  public closeStructField(decl: FieldDecl) {
    // nothing to do
  }

  public closeStruct(decl: StructDecl) {
    const name = resolveName(decl);
    log(`closeStruct(${name}): begin`);

    this.typingsBuilder.appendLine(`}`);
    this.nativeBuilder.appendLine(`});`);

    log(`closeStruct(${name}): end`);
  }

  public openFunction(decl: FunctionDecl) {
    const name = resolveName(decl);
    log(`openFunction(${name}): begin`);

    let typeClass = decl.typeClass;

    // if it's an attributed type we should just access the internal type
    //
    // TODO(bengreenier): should we do this for all types? docs on attributed types are weak
    // i am not sure if this only occurs for function types or if it may occur for other types
    if (typeClass.isAttributedType && typeClass.modifiedType) {
      typeClass = typeClass.modifiedType;
    }

    if (typeClass.isFunctionType && typeClass.returnType) {
      let params = "";

      // if we actually have params, overwrite the empty string
      if (typeClass.paramTypes && typeClass.paramTypes.length > 0) {
        params = typeClass.paramTypes
          .map((p, i) => this.resolveType(`${name}:${i}`, p, this.refResolver))
          .join(",");
      }

      this.fnBuilder.appendLine(
        `"${name}": [${this.resolveType(
          name,
          typeClass.returnType,
          this.refResolver
        )}, [${params}]],`
      );
    }

    log(`openFunction(${name}): end`);
  }

  public openFunctionParam(decl: ParamDecl) {
    // nothing to do
  }

  public closeFunctionParam(decl: ParamDecl) {
    // nothing to do
  }

  public closeFunction(decl: FunctionDecl) {
    // nothing to do
  }

  /**
   * Resolves a type, optionally remapping along the way.
   *
   * @param symbolName symbol to resolve
   * @param type type to resolve
   * @param resolver resolver to use
   * @returns resolved type string
   */
  private resolveType(
    symbolName: string | undefined,
    type: Type,
    resolver: ITypeNameResolver
  ): string {
    const preMapper = this.opts.symbols.remap.find((spec) =>
      matches(symbolName ?? "", spec.selector)
    );

    let preType = type;

    if (preMapper) {
      log(
        `found remap selector for '${symbolName}'. Remapping to '${preMapper.replacement}'.`
      );

      preType = new DesugaredType(type.handle, preMapper.replacement);
    }

    let result = resolveType(preType, resolver);

    const postMapper = this.opts.symbols.hardRemap.find((spec) =>
      matches(symbolName ?? "", spec.selector)
    );

    if (postMapper) {
      log(
        `found hard-remap selector for '${symbolName}'. Hard remapping to '${postMapper.replacement}' from '${result}'.`
      );
      result = postMapper.replacement;
    }

    return result;
  }
}
