import { isMatch as isWildcardMatch } from "matcher";

/**
 * Selector that selects symbol names
 */
export interface SelectorData {
  /**
   * The symbol name filter.
   *
   * Supports wildcards (e.g. `*`) to allow matching any character
   */
  readonly symbolName: string;

  /**
   * Child selectors that further select data from within the current selection scope.
   */
  readonly children: SelectorData[];
}

/**
 * Matches `MyType:MyField`
 */
const noBracketSelectorRe =
  /^(?<symbolTitle>[*A-Za-z0-9_\-]+):(?!:{)(?<symbolChildren>[*A-Za-z0-9_\- ]+)(?!})$/;

/**
 * Matches `MyType:{MyField1, MyField2}`
 */
const bracketSelectorRe =
  /^(?<symbolTitle>[*A-Za-z0-9_\-]+):{(?<symbolChildren>[,*A-Za-z0-9_\- ]+)}$/;

/**
 * Matches `MyType`
 */
const simpleSelectorRe = /^(?<symbolTitle>[*A-Za-z0-9_\-]+)$/;

/**
 * Parses a selector string into a `SelectorData` object.
 *
 * @example
 * "MyType"
 * "MyType:MyParam"
 * "MyType:*Param"
 * "MyType:{MyParam1, MyParam2}"
 * @param str selector string
 * @returns `SelectorData` object
 * @throws {Error} thrown when a selector cannot be parsed successfully.
 */
export function parse(str: string): SelectorData {
  if (str.length == 0) {
    throw new Error(`Invalid selector: length is 0`);
  }

  const simpleSel = simpleSelectorRe.exec(str);
  if (simpleSel && simpleSel.groups) {
    return {
      symbolName: simpleSel.groups["symbolTitle"].trim(),
      children: [],
    };
  }

  const bracketSel = bracketSelectorRe.exec(str);
  if (bracketSel && bracketSel.groups) {
    return {
      symbolName: bracketSel.groups["symbolTitle"].trim(),
      children: bracketSel.groups["symbolChildren"]
        .split(",")
        .map((c) => parse(c.trim())),
    };
  }

  const noBracketSel = noBracketSelectorRe.exec(str);
  if (noBracketSel && noBracketSel.groups) {
    return {
      symbolName: noBracketSel.groups["symbolTitle"].trim(),
      children: noBracketSel.groups["symbolChildren"]
        .split(",")
        .map((c) => parse(c.trim())),
    };
  }

  throw new Error(`Invalid selector: '${str}' has incorrect format.`);
}

/**
 * Parses a `SelectorData` object into a selector string.
 *
 * @param sel `SelectorData` object
 * @param strict flag indicating if we should use strict formatting. Always uses `{<symbolChildren>}` notation.
 * @returns selector string
 */
export function format(sel: SelectorData, strict?: boolean): string {
  const children = sel.children.map((c) => format(c)).join(", ");
  let useBrackets =
    sel.children.length > 1 || typeof strict === "undefined" || strict;

  let paramText =
    children.length > 0
      ? `:${useBrackets ? "{" : ""}${children}${useBrackets ? "}" : ""}`
      : "";

  return `${sel.symbolName}${paramText}`;
}

/**
 * Checks if a selector matches a symbol.
 * @param symbol symbol to check against
 * @param sel selector to check with
 * @throws {Error} thrown when a selector cannot be parsed successfully.
 * @param sep symbol name separator to use. Default ':'.
 */
export function matches(symbol: string, sel: string, sep?: string): boolean;
/**
 * Checks if a selector matches a symbol.
 * @param symbol symbol to check against
 * @param sel selector to check with
 * @param sep symbol name separator to use. Default ':'.
 */
export function matches(
  symbol: string,
  sel: SelectorData,
  sep?: string
): boolean;
export function matches(
  symbol: string,
  sel: string | SelectorData,
  sep?: string
): boolean {
  const selector = typeof sel === "string" ? parse(sel) : sel;
  const symbolSep = sep ?? ":";

  const resolvePatterns = (s: SelectorData): string[] => {
    return s.children.length == 0
      ? [format(s, false)]
      : s.children.flatMap((child) =>
          resolvePatterns(child).map((c) => `${s.symbolName}${symbolSep}${c}`)
        );
  };

  return isWildcardMatch(symbol, resolvePatterns(selector));
}
