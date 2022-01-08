import { lib, openLib } from "./lib";
import ref, { Pointer, NULL_POINTER } from "ref-napi";
import refArrayDi from "ref-array-di";
import {
  CXChildVisitResult,
  CXCursorKind,
  CXTranslationUnit_Flags,
  CXTypeKind,
  CXUnsavedFileDef,
} from "./libclang";
import { Cursor } from "./models/cursor";
import { TranslationUnit } from "./models/translation-unit";
import { CXCursor, CXTranslationUnit } from "./models/types";
import {
  Decl,
  EnumConstantDecl,
  EnumDecl,
  FieldDecl,
  FunctionDecl,
  ParamDecl,
  StructDecl,
  TypedefDecl,
} from "./models/decl";
import { DesugaredType, Type } from "./models/type";

/**
 * Internal array type
 */
const Array = refArrayDi(ref);

/**
 * Internal type for an `CXUnsavedFile` array
 */
const UnsavedFileArray = Array(CXUnsavedFileDef);

/**
 * Internal string array type
 */
const StringArray = Array(ref.types.CString);

/**
 * An opaque pointer to an internal `CXIndex`
 */
export type CXIndex = Pointer<void>;

/**
 * Visitor user data
 */
export type VisitorUserData = unknown;

/**
 * Visitor function signature
 */
export type Visitor = (
  /**
   * The current cursor
   */
  current: Cursor,

  /**
   * The parent cursor
   */
  parent: Cursor,

  /**
   * Visitor user data
   */
  userData: VisitorUserData
) => CXChildVisitResult;

/**
 * The supported languages
 */
export enum Language {
  /**
   * C language
   */
  C = "c",
  /**
   * C++ language
   */
  Cpp = "c++",
}

/**
 * Parse options for `parse()`
 */
export interface ParseOptions {
  /**
   * The index - see `createIndex()`
   */
  index: CXIndex;

  /**
   * The source path
   */
  path: string;

  /**
   * The language
   */
  language: Language;

  /**
   * Additional directories to include
   */
  includeDirectories: string[];

  /**
   * Preprocessor definitions to define
   */
  preprocessorDefinitions: string[];
}

/**
 * Loads libclang from binary - Must be called before any other functions
 * @param libPath path to libclang binary
 */
export function loadLibClang(libPath: string) {
  openLib(libPath);
}

/**
 * Creates a `CXIndex` for use with other functions
 * @returns the index
 */
export function createIndex(): CXIndex {
  if (!lib) {
    throw new Error(`libclang not loaded. Call loadLibClang() first.`);
  }

  return lib.clang_createIndex(1, 1);
}

/**
 * Parses c/c++ source into a translation unit for further use.
 * @param options parse options
 */
export function parse(opts: ParseOptions): TranslationUnit {
  if (!lib) {
    throw new Error(`libclang not loaded. Call loadLibClang() first.`);
  }

  const args = [
    `--language=${opts.language}`,
    "-Wno-pragma-once-outside-header",
  ];

  opts.includeDirectories.forEach((dir) => {
    args.push(`-I${dir}`);
  });

  opts.preprocessorDefinitions.forEach((def) => {
    args.push(`-D ${def}`);
  });

  const nativeArgs = new StringArray(args.length);
  args.forEach((a, i) => (nativeArgs[i] = a));

  const nativeFiles = new UnsavedFileArray(0);

  // wrap the raw pointer in our model
  return new TranslationUnit(
    // invoke the parser
    lib.clang_parseTranslationUnit(
      opts.index,
      opts.path,
      nativeArgs.buffer as Pointer<string>,
      args.length,
      nativeFiles.buffer as Pointer<any>,
      0,
      CXTranslationUnit_Flags.CXTranslationUnit_None |
        CXTranslationUnit_Flags.CXTranslationUnit_IncludeAttributedTypes |
        CXTranslationUnit_Flags.CXTranslationUnit_VisitImplicitAttributes
    )
  );
}

/**
 * Visits a cursor's contents calling the given `visitor` function for each symbol.
 * @param translationOrCursor the cursor to visit
 * @param visitor the visitor function to use
 */
export function visit(cursor: Cursor, visitor: Visitor): void;
/**
 * Visits a translation unit's contents calling the given `visitor` function for each symbol.
 * @param translationOrCursor the translation unit to visit
 * @param visitor the visitor function to use
 */
export function visit(translationUnit: TranslationUnit, visitor: Visitor): void;
export function visit(
  translationOrCursor: TranslationUnit | Cursor,
  visitor: Visitor
): void {
  if (!lib) {
    throw new Error(`libclang not loaded. Call loadLibClang() first.`);
  }

  const cur =
    translationOrCursor instanceof TranslationUnit
      ? translationOrCursor.cursor
      : translationOrCursor;

  // invoke the visitor
  lib.clang_visitChildren(
    cur.handle,
    (curr: CXCursor, parent: CXCursor, data: unknown) => {
      // map the native type to models then invoke the visitor
      return visitor(new Cursor(curr), new Cursor(parent), data);
    },
    NULL_POINTER as any
  );
}

// if you need to use it as an external caller, it should go in this list

export {
  Type,
  DesugaredType,
  Cursor,
  Decl,
  FunctionDecl,
  ParamDecl,
  EnumDecl,
  EnumConstantDecl,
  StructDecl,
  FieldDecl,
  TypedefDecl,
  TranslationUnit,
  CXChildVisitResult,
  CXCursorKind,
  CXTypeKind,
  CXCursor,
  CXTranslationUnit,
};
