import {
  EnumDecl,
  EnumConstantDecl,
  TypedefDecl,
  StructDecl,
  FieldDecl,
  FunctionDecl,
  ParamDecl,
} from "libclang-bindings";

export interface ISourceGenerator {
  open(outputPath: string): void;
  close(): void;

  openEnum(decl: EnumDecl): void;
  openEnumConstant(decl: EnumConstantDecl): void;
  closeEnumConstant(decl: EnumConstantDecl): void;
  closeEnum(decl: EnumDecl): void;

  openTypedef(decl: TypedefDecl): void;
  closeTypedef(decl: TypedefDecl): void;

  openStruct(decl: StructDecl): void;
  openStructField(decl: FieldDecl): void;
  closeStructField(decl: FieldDecl): void;
  closeStruct(decl: StructDecl): void;

  openFunction(decl: FunctionDecl): void;
  openFunctionParam(decl: ParamDecl): void;
  closeFunctionParam(decl: ParamDecl): void;
  closeFunction(decl: FunctionDecl): void;
}

/**
 * Possible line endings to use
 */
export enum LineEndings {
  /**
   * E.g. `\n`
   */
  LF = "lf",

  /**
   * E.g. `\r\n`
   */
  CRLF = "crlf",
}

/**
 * A lightweight type resolver for use during generation
 * This allows us to swap between raw TS types and ref types while sharing the type resolution logic
 */
export interface ITypeNameResolver {
  lookup: { [key: string]: string };
  createPointer(str: string): string;
  createArray(str: string): string;
  createEnum(str: string): string;
  createStruct(str: string): string;
  createFunction(str: string): string;
  createUnknown(str: string): string;
}
