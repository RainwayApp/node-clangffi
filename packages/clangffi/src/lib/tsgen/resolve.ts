import debug from "debug";
import { CXTypeKind, Type } from "libclang-bindings";
import { StringBuilder } from "../string-builder";
import { ITypeNameResolver, LineEndings } from "../types";
import { resolveName, simpleDesugar } from "../util";

/**
 * log for resolving ref types
 */
const resolveLog = debug("clangffi:tsgen:resolve");

/**
 * Resolver that matches native types with their typescript types
 */
export class TSResolver implements ITypeNameResolver {
  // TODO(bengreenier): ensure this list is exhaustive
  lookup = {
    void: "void",
    uint8_t: "number",
    int: "number",
    "unsigned int": "number",
    int8_t: "number",
    uint16_t: "number",
    int16_t: "number",
    uint32_t: "number",
    int32_t: "number",
    uint64_t: "number",
    float: "number",
    double: "number",
    bool: "boolean",
    byte: "number",
    char: "number",
    "char*": "string",
    short: "number",
    long: "number",
    time_t: "number",
    size_t: "number",
    "long long": "number",
    "unsigned short": "number",
    "unsigned long": "number",
    "unsigned long long": "number",
  };

  createPointer(str: string): string {
    return `TypedPointer<${str}>`;
  }
  createArray(str: string): string {
    return `TypedArray<${str}>`;
  }
  createEnum(str: string): string {
    return str;
  }
  createStruct(str: string): string {
    return str;
  }
  createFunction(str: string): string {
    // TODO(bengreenier): this is a dirty hack that we should probably rethink
    // we are parsing out the ref function format (e.g. `ret, [param1, param2, etc]`)
    // to create a typescript equivalent function type
    const parts = str.split(",");
    const ret = parts[0];
    const remainder = parts.slice(1).join(",");

    const params = remainder.substring(
      remainder.indexOf("[") + 1,
      remainder.lastIndexOf("]")
    );

    // ts needs names before types so generate that signature
    const sig = params
      .split(",")
      .map((p, i) => `arg${i}: ${p}`.trim())
      .join(", ");

    return `(${sig}) => ${ret}`;
  }
  createUnknown(str: string): string {
    return str;
  }
}

/**
 * Resolver that matches native types with their `ref` types
 */
export class RefResolver implements ITypeNameResolver {
  // TODO(bengreenier): ensure this list is exhaustive
  lookup = {
    void: "ref.types.void",
    uint8_t: "ref.types.uint8",
    int: "ref.types.int",
    "unsigned int": "ref.types.uint",
    int8_t: "ref.types.int8",
    uint16_t: "ref.types.uint16",
    int16_t: "ref.types.int16",
    uint32_t: "ref.types.uint32",
    int32_t: "ref.types.int32",
    uint64_t: "ref.types.int64",
    float: "ref.types.float",
    double: "ref.types.double",
    bool: "ref.types.bool",
    byte: "ref.types.byte",
    char: "ref.types.char",
    "char*": "ref.types.CString",
    short: "ref.types.short",
    long: "ref.types.long",
    time_t: "ref.types.longlong",
    size_t: "ref.types.ulonglong",
    "long long": "ref.types.longlong",
    "unsigned short": "ref.types.ushort",
    "unsigned long": "ref.types.ulong",
    "unsigned long long": "ref.types.ulonglong",
  };

  createPointer(str: string): string {
    return `Pointer(${str})`;
  }
  createArray(str: string): string {
    return `Array(${str})`;
  }
  createEnum(str: string): string {
    return `${str}Def`;
  }
  createStruct(str: string): string {
    return `${str}Def`;
  }
  createFunction(str: string): string {
    return `ffi.Function(${str})`;
  }
  createUnknown(str: string): string {
    return `${str}Def`;
  }
}

/**
 * Resolves a typescript ref type for a given clang type
 * @param type clang type
 * @param resolver the name resolver to use
 */
export function resolveType(type: Type, resolver: ITypeNameResolver): string {
  const sb = new StringBuilder(LineEndings.LF);

  // elaborated
  if (!type.isCanonical && type.canonicalType) {
    resolveLog(`${type.name} is elaborated, further resolving...`);

    // just recurse
    sb.append(resolveType(type.canonicalType, resolver));
  }
  // pointer
  else if (type.isPointer && type.pointeeType) {
    resolveLog(`${type.name} is pointer`);

    const pointee = type.pointeeType;

    if (pointee.isFunctionType) {
      resolveLog(`${pointee.name} is function`);

      // func protos are always pointers but we don't wrap them as such
      sb.append(resolveType(pointee, resolver));
    } else if (pointee.name.endsWith("char")) {
      resolveLog(`${pointee.name} is char*`);

      sb.append(resolver.lookup["char*"]);
    } else {
      resolveLog(`${pointee.name} is a pointer, further resolving..`);

      sb.append(resolver.createPointer(`${resolveType(pointee, resolver)}`));
    }
  }
  // const
  else if (type.isLocalConstQualified && type.nonConstType) {
    resolveLog(`${type.name} is const qualified, further resolving...`);

    sb.append(resolveType(type.nonConstType, resolver));
  }
  // enum
  else if (type.isEnumType) {
    resolveLog(`${type.name} is enum`);

    // sometimes the typename has "enum" sugar before it, we want to pull that off
    var typeStr = type.name.startsWith("enum ")
      ? type.name.substring("enum ".length)
      : type.name;

    sb.append(resolver.createEnum(typeStr));
  }
  // struct (not just all records, only those that are structs)
  else if (type.isRecordType && type.name.startsWith("struct ")) {
    resolveLog(`${type.name} is struct`);

    // here we pull off the struct sugar before creating the resolved type
    sb.append(resolver.createStruct(type.name.substring("struct ".length)));
  }
  // array
  else if (type.isArrayType && type.elementType) {
    resolveLog(`${type.name} is array`);

    sb.append(
      resolver.createArray(
        `${resolveType(type.elementType, resolver)}, ${type.arraySize}`
      )
    );
  }
  // function
  else if (type.isFunctionType && type.paramTypes && type.returnType) {
    resolveLog(`${type.name} is fn`);

    // resolve all the params first
    const params = type.paramTypes
      .map((p) => resolveType(p, resolver))
      .join(", ");

    resolveLog(`${type.name} resolved params`);

    sb.append(
      resolver.createFunction(
        `${resolveType(type.returnType, resolver)}, [${params}]`
      )
    );
  }
  // built in
  else if (resolver.lookup[type.name]) {
    resolveLog(`${type.name} is builtin`);

    sb.append(resolver.lookup[type.name]);
  }
  // unknown
  else {
    resolveLog(`${type.name} is unknown`);

    sb.append(resolver.createUnknown(simpleDesugar(type)));
  }

  const res = sb.toString();

  resolveLog(`${type.name} resolved to '${res}'`);

  // done!
  return res;
}
