import { dlopen } from "./libclang";

/**
 * Storage for the libclang library once it's opened.
 *
 * This simplifies the case where a user wants to bring their own lib path
 * but our code plans to consume the lib as if it was static.
 *
 * Note: We also "lie" and type this an always defined.
 */
export let lib: ReturnType<typeof dlopen>;

export function openLib(libPath: string) {
  lib = dlopen(libPath);
}
