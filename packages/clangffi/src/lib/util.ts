import debug from "debug";
import { CXTypeKind, Decl, Type } from "libclang-bindings";

/**
 * log for desugaring
 */
const desugarLog = debug("clangffi:tsgen:desugar");

/**
 * Attempts a simple desugar for a clang type
 * This is extremely brittle
 *
 * This is due to libclang not providing desugar capabilities
 * @param type clang type
 */
export function simpleDesugar(type: Type) {
  let desugared =
    type.name.length == 0 && type.canonicalType
      ? type.canonicalType.name
      : type.name;

  if (type.kind == CXTypeKind.CXType_Pointer) {
    desugared = desugared.replace("*", "");
    desugarLog(`removed pointer: '${desugared}'`);
  }

  if (type.isLocalConstQualified) {
    desugared = desugared.replace("const", "");
    desugarLog(`removed const: '${desugared}'`);
  }

  return desugared;
}

/**
 * Attempts to resolve a name for a declaration
 * @param decl declaration
 */
export function resolveName(decl: Decl): string | undefined {
  if (decl.name.length > 0) {
    return decl.name;
  }

  if (decl.type.name.length > 0) {
    return decl.type.name;
  }

  if (decl.parent && decl.parent.type.name.length > 0) {
    return decl.parent.type.name;
  }

  return undefined;
}

/**
 * formats a path consistently for comparison
 * @param str path
 */
export function formatPath(str: string): string {
  return str.replace(/\\/g, "/");
}
