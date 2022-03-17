import ffi from "ffi-napi";
import ref, { Pointer as TypedPointer, UnderlyingType } from "ref-napi";
import refStructDi, { StructObject } from "ref-struct-di";
import refArrayDi, { TypedArray } from "ref-array-di";
import refUnionDi from "ref-union-di";
const Struct = refStructDi(ref);
const Union = refUnionDi(ref);
const ArrayType = refArrayDi(ref);
const Pointer = ref.refType;
export type JustUnionType = UnderlyingType<typeof JustUnionDef>;
export interface JustUnion {
  a: number;
  b: number;
}
export enum RainwayInput_Tag {
  IDK = 0,
  GAMEPAD = 1,
  MOUSE = 2,
}
export type GamepadReport_BodyType = UnderlyingType<
  typeof GamepadReport_BodyDef
>;
export interface GamepadReport_Body {
  text: string;
}
export type MouseAbsolute_BodyType = UnderlyingType<
  typeof MouseAbsolute_BodyDef
>;
export interface MouseAbsolute_Body {
  x: number;
  y: number;
}
export type RainwayInput_UnionType = UnderlyingType<
  typeof RainwayInput_UnionDef
>;
export interface RainwayInput_Union {
  GAMEPAD_REPORT: GamepadReport_Body;
  MOUSE_ABSOLUTE: MouseAbsolute_Body;
}
export type RainwayInputType = UnderlyingType<typeof RainwayInputDef>;
export interface RainwayInput {
  tag: RainwayInput_Tag;
  union: RainwayInput_Union;
}
export const JustUnionDef = Union({
  a: ref.types.int,
  b: ref.types.char,
});
export const RainwayInput_TagDef = ref.types.int;
export const GamepadReport_BodyDef = Struct({
  text: ref.types.CString,
});
export const MouseAbsolute_BodyDef = Struct({
  x: ref.types.int,
  y: ref.types.int,
});
export const RainwayInput_UnionDef = Union({
  GAMEPAD_REPORT: GamepadReport_BodyDef,
  MOUSE_ABSOLUTE: MouseAbsolute_BodyDef,
});
export const RainwayInputDef = Struct({
  tag: RainwayInput_TagDef,
  union: RainwayInput_UnionDef,
});
export function dlopen(libPath: string) {
  return ffi.Library(libPath, {});
}
