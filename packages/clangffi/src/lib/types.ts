import {
  EnumDecl,
  EnumConstantDecl,
  TypedefDecl,
  StructDecl,
  UnionDecl,
  FieldDecl,
  FunctionDecl,
  ParamDecl,
} from "libclang-bindings";
import { SelectorData } from "./selector";

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
  openField(decl: FieldDecl): void;
  closeField(decl: FieldDecl): void;
  closeStruct(decl: StructDecl): void;

  openUnion(decl: UnionDecl): void;
  closeUnion(decl: UnionDecl): void;

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
 * Represents a lookup table in an `ITypeResolver'
 */
export interface INativeLookupTable {
  [key: string]: string;
  void: string;
  int8_t: string;
  uint8_t: string;
  int16_t: string;
  uint16_t: string;
  int32_t: string;
  uint32_t: string;
  int64_t: string;
  uint64_t: string;
  float: string;
  double: string;
  // "long double": string
  // "unclear spec": string,
  "char*": string;
  bool: string;
  _Bool: string;
  byte: string;
  char: string;
  "signed char": string;
  uchar: string;
  "unsigned char": string;
  short: string;
  "short int": string;
  "signed short": string;
  "signed short int": string;
  ushort: string;
  "unsigned short": string;
  "unsigned short int": string;
  int: string;
  signed: string;
  "signed int": string;
  unsigned: string;
  "unsigned int": string;
  long: string;
  "long int": string;
  "signed long": string;
  "signed long int": string;
  "unsigned long": string;
  "unsigned long int": string;
  "long long": string;
  "long long int": string;
  "signed long long": string;
  "signed long long int": string;
  "unsigned long long": string;
  "unsigned long long int": string;
  size_t: string;
}

/**
 * A lightweight type resolver for use during generation
 * This allows us to swap between raw TS types and ref types while sharing the type resolution logic
 */
export interface ITypeNameResolver {
  lookup: INativeLookupTable;
  createPointer(str: string): string;
  createArray(str: string): string;
  createEnum(str: string): string;
  createStruct(str: string): string;
  createUnion(str: string): string;
  createFunction(str: string): string;
  createUnknown(str: string): string;
}

/**
 * The spec for a symbol replacement
 */
export interface SymbolReplacementSpec {
  /**
   * The symbol selector
   */
  selector: SelectorData;

  /**
   * The replacement type
   */
  replacement: string;
}
