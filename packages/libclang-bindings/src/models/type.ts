import { lib } from "../lib";
import { CXTypeKind } from "../libclang";
import { readNativeString } from "../util";
import { CXType, INativeHandle } from "./types";

/**
 * A symbol type from the clang AST
 */
export class Type implements INativeHandle<CXType> {
  protected internalSpelling: string;

  constructor(private type: CXType) {
    this.internalSpelling = readNativeString(
      lib.clang_getTypeSpelling(this.type)
    );
  }

  get handle(): CXType {
    return this.type;
  }

  get spelling(): string {
    return this.internalSpelling;
  }

  get kind(): CXTypeKind {
    return this.type.kind;
  }

  get name(): string {
    return this.spelling;
  }

  get isCanonical(): boolean {
    return this.kind != CXTypeKind.CXType_Elaborated;
  }
  get canonicalType(): Type | undefined {
    if (!this.isCanonical) {
      return new Type(lib.clang_getCanonicalType(this.type));
    }
  }

  get isPointer(): boolean {
    return this.kind == CXTypeKind.CXType_Pointer;
  }
  get pointeeType(): Type | undefined {
    if (this.isPointer) {
      return new Type(lib.clang_getPointeeType(this.type));
    }
  }

  get isLocalConstQualified(): boolean {
    return (
      lib.clang_isConstQualifiedType(this.type) == 1 &&
      !(this instanceof DesugaredConstType)
    );
  }
  get nonConstType(): Type | undefined {
    if (this.isLocalConstQualified) {
      return new DesugaredConstType(
        this.type,
        this.name.replace("const", "").trim()
      );
    }
  }

  get isArrayType(): boolean {
    return this.kind == CXTypeKind.CXType_ConstantArray;
  }
  get elementType(): Type | undefined {
    if (this.isArrayType) {
      return new Type(lib.clang_getElementType(this.type));
    }
  }
  get arraySize(): number | undefined {
    if (this.isArrayType) {
      return Number(lib.clang_getArraySize(this.type));
    }
  }

  get isFunctionType(): boolean {
    return this.kind == CXTypeKind.CXType_FunctionProto;
  }
  get returnType(): Type | undefined {
    if (this.isFunctionType) {
      return new Type(lib.clang_getResultType(this.type));
    }
  }
  get paramTypes(): Type[] | undefined {
    if (this.isFunctionType) {
      return this.parseParamTypes();
    }
  }

  get isEnumType(): boolean {
    return this.kind == CXTypeKind.CXType_Enum;
  }
  get isRecordType(): boolean {
    return this.kind == CXTypeKind.CXType_Record;
  }

  private parseParamTypes(): Type[] {
    const numArgs = lib.clang_getNumArgTypes(this.type);
    const res: Type[] = [];
    for (var i = 0; i < numArgs; i++) {
      res.push(new Type(lib.clang_getArgType(this.type, i)));
    }

    return res;
  }
}

/**
 * A type with a desugared spelling
 */
export class DesugaredType extends Type {
  constructor(type: CXType, desugaredSpelling: string) {
    super(type);

    this.internalSpelling = desugaredSpelling;
  }
}

/**
 * Internal only type for desugared const type
 * We use this to determine if something was `isLocalConstQualified` but then desugared to avoid an infinite recursion bug
 */
class DesugaredConstType extends DesugaredType {
  constructor(type: CXType, desugaredName: string) {
    super(type, desugaredName);
  }
}
