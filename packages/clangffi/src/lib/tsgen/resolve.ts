import debug from "debug";
import { Type } from "libclang-bindings";
import { StringBuilder } from "../string-builder.js";
import { ITypeNameResolver, LineEndings } from "../types.js";
import { simpleDesugar } from "../util.js";

/**
 * log for resolving ref types
 */
const resolveLog = debug("clangffi:tsgen:resolve");

/**
 * Resolver that matches native types with their typescript types
 */
export class TSResolver implements ITypeNameResolver {
  lookup = {
    void: "void",
    int8_t: "number",
    uint8_t: "number",
    int16_t: "number",
    uint16_t: "number",
    int32_t: "number",
    uint32_t: "number",
    int64_t: "number",
    uint64_t: "number",
    float: "number",
    double: "number",
    // "long double": "unclear spec",
    // "unclear spec": "ref.types.Object",
    "char*": "string",
    bool: "boolean",
    _Bool: "boolean",
    byte: "number",
    char: "number",
    "signed char": "number",
    uchar: "number",
    "unsigned char": "number",
    short: "number",
    "short int": "number",
    "signed short": "number",
    "signed short int": "number",
    ushort: "number",
    "unsigned short": "number",
    "unsigned short int": "number",
    int: "number",
    signed: "number",
    "signed int": "number",
    unsigned: "number",
    "unsigned int": "number",
    long: "number",
    "long int": "number",
    "signed long": "number",
    "signed long int": "number",
    "unsigned long": "number",
    "unsigned long int": "number",
    "long long": "number",
    "long long int": "number",
    "signed long long": "number",
    "signed long long int": "number",
    "unsigned long long": "number",
    "unsigned long long int": "number",
    size_t: "number",
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
    // if `params.length` is zero we have no params so just use an empty string
    const sig =
      params.length == 0
        ? ""
        : params
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
    int8_t: "ref.types.int8",
    uint8_t: "ref.types.uint8",
    int16_t: "ref.types.int16",
    uint16_t: "ref.types.uint16",
    int32_t: "ref.types.int32",
    uint32_t: "ref.types.uint32",
    int64_t: "ref.types.int64",
    uint64_t: "ref.types.uint64",
    float: "ref.types.float",
    double: "ref.types.double",
    // "long double": "unclear spec",
    // "unclear spec": "ref.types.Object",
    "char*": "ref.types.CString",
    bool: "ref.types.bool",
    _Bool: "ref.types.bool",
    byte: "ref.types.byte",
    char: "ref.types.char",
    "signed char": "ref.types.char",
    uchar: "ref.types.uchar",
    "unsigned char": "ref.types.uchar",
    short: "ref.types.short",
    "short int": "ref.types.short",
    "signed short": "ref.types.short",
    "signed short int": "ref.types.short",
    ushort: "ref.types.ushort",
    "unsigned short": "ref.types.ushort",
    "unsigned short int": "ref.types.ushort",
    int: "ref.types.int",
    signed: "ref.types.int",
    "signed int": "ref.types.int",
    unsigned: "ref.types.uint",
    "unsigned int": "ref.types.uint",
    long: "ref.types.long",
    "long int": "ref.types.long",
    "signed long": "ref.types.long",
    "signed long int": "ref.types.long",
    "unsigned long": "ref.types.ulong",
    "unsigned long int": "ref.types.ulong",
    "long long": "ref.types.longlong",
    "long long int": "ref.types.longlong",
    "signed long long": "ref.types.longlong",
    "signed long long int": "ref.types.longlong",
    "unsigned long long": "ref.types.ulonglong",
    "unsigned long long int": "ref.types.ulonglong",
    size_t: "ref.types.size_t",
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
  else if (type.isFunctionType && type.returnType) {
    resolveLog(`${type.name} is fn`);

    let params = "";

    // if we actually have params, overwrite the empty string
    if (type.paramTypes && type.paramTypes.length > 0) {
      params = type.paramTypes.map((p) => resolveType(p, resolver)).join(", ");
    }

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
