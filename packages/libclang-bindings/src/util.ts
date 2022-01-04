import { Pointer } from "ref-napi";
import { StructObject } from "ref-struct-di";
import { lib } from "./lib";

/**
 * Reads, copies, and then disposes a native string.
 * @param native native string handle
 */
export function readNativeString(
  native: StructObject<{
    data: Pointer<void>;
    private_flags: number;
  }>
): string {
  let strCopy: string;
  {
    const str = lib.clang_getCString(native);
    strCopy = str?.slice() ?? "";
  }
  lib.clang_disposeString(native);

  return strCopy;
}
