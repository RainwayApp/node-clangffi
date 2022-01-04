import { Pointer } from "ref-napi";
import { StructObject } from "ref-struct-di";
import { TypedArray } from "ref-array-di";
import { CXCursorKind, CXTypeKind } from "../libclang";

/**
 * Native cursor type
 */
export type CXCursor = StructObject<{
  kind: CXCursorKind;
  xdata: number;
  data: TypedArray<Pointer<void>, 3>;
}>;

/**
 * Native cursor-type type
 */
export type CXCursorType = StructObject<{
  kind: CXCursorKind;
  data: TypedArray<Pointer<void>, 2>;
}>;

/**
 * Native type type
 */
export type CXType = StructObject<{
  kind: CXTypeKind;
  data: TypedArray<Pointer<void>, 2>;
}>;

/**
 * Native source location type
 */
export type CXSourceLocation = StructObject<{
  ptr_data: TypedArray<Pointer<void>, 2>;
  int_data: number;
}>;

/**
 * Native translation unit type
 */
export type CXTranslationUnit = Pointer<StructObject<{}>>;

/**
 * Model types with a native backing handle should implement this
 */
export interface INativeHandle<THandle> {
  /**
   * The native handle
   */
  get handle(): THandle;
}
