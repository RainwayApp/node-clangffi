import { lib } from "../lib";
import { alloc, ref } from "ref-napi";
import { CXCursorKind, CXFileDef, CXTypeKind } from "../libclang";
import { Cursor } from "./cursor";
import { readNativeString } from "../util";
import { CXCursor, CXSourceLocation } from "./types";
import { Type } from "./type";

export class Decl extends Cursor {
  /**
   * Attempts to create a typed decl for a given cursor
   * @param cursor current cursor
   * @param parent parent cursor
   * @returns decl
   */
  public static CreateTypedDecl(
    cursor: Cursor,
    parent?: Cursor
  ): Decl | undefined {
    var native = cursor.handle;
    switch (cursor.kind) {
      case CXCursorKind.CXCursor_FunctionDecl:
        return new FunctionDecl(native, cursor.kind);
      case CXCursorKind.CXCursor_ParmDecl:
        return new ParamDecl(native, cursor.kind);
      case CXCursorKind.CXCursor_EnumDecl:
        return new EnumDecl(native, cursor.kind);
      case CXCursorKind.CXCursor_EnumConstantDecl:
        return new EnumConstantDecl(native, cursor.kind);
      case CXCursorKind.CXCursor_StructDecl:
        return new StructDecl(native, cursor.kind);
      case CXCursorKind.CXCursor_FieldDecl:
        return new FieldDecl(native, cursor.kind);
      case CXCursorKind.CXCursor_TypedefDecl:
        return new TypedefDecl(native, cursor.kind);
      default:
        return undefined;
    }
  }

  public readonly parent?: Cursor;

  constructor(ptr: CXCursor, private ptrKind: CXCursorKind, parent?: Cursor) {
    super(ptr);

    this.parent = parent;
  }

  get name(): string {
    return this.spelling;
  }

  get typeClass(): Type {
    return new Type(lib.clang_getCursorType(this.handle));
  }

  get isMacroBuiltin(): boolean {
    return (
      this.kind == CXCursorKind.CXCursor_MacroDefinition &&
      lib.clang_Cursor_isMacroBuiltin(this.handle) == 1
    );
  }

  get isSystemBuiltin(): boolean {
    return lib.clang_Location_isInSystemHeader(this.getLocation()) == 1;
  }

  get sourcePath(): string {
    return this.parseSourcePath(this.getLocation());
  }

  public toJSON(): string {
    return JSON.stringify({
      spelling: this.spelling,
      sourcePath: this.sourcePath,
      isDecl: this.isDecl,
      isMacroBuiltin: this.isMacroBuiltin,
      isSystemBuiltin: this.isSystemBuiltin,
      name: this.name,
      kind: this.kind,
    });
  }

  private getLocation(): CXSourceLocation {
    return lib.clang_getCursorLocation(this.handle);
  }

  private parseSourcePath(loc: CXSourceLocation): string {
    const file = ref(alloc(CXFileDef));

    // TODO(bengreenier): callers might want these two, but skipping for now
    const line = ref(alloc("uint", 0));
    const col = ref(alloc("uint", 0));
    const offset = ref(alloc("uint", 0));

    lib.clang_getFileLocation(loc, file, line, col, offset);

    return readNativeString(lib.clang_getFileName(file.deref()));
  }
}

export class FunctionDecl extends Decl {
  constructor(ptr: CXCursor, ptrKind: CXCursorKind, parent?: Cursor) {
    super(ptr, ptrKind, parent);
  }
}
export class ParamDecl extends Decl {
  constructor(ptr: CXCursor, ptrKind: CXCursorKind, parent?: Cursor) {
    super(ptr, ptrKind, parent);
  }
}

export class EnumDecl extends Decl {
  constructor(ptr: CXCursor, ptrKind: CXCursorKind, parent?: Cursor) {
    super(ptr, ptrKind, parent);
  }

  get backingType(): Type {
    return new Type(lib.clang_getEnumDeclIntegerType(this.handle));
  }
}

export class EnumConstantDecl extends Decl {
  constructor(ptr: CXCursor, ptrKind: CXCursorKind, parent?: Cursor) {
    super(ptr, ptrKind, parent);
  }

  get isSigned(): boolean {
    return (
      lib.clang_getEnumDeclIntegerType(this.handle).kind ==
      CXTypeKind.CXType_Int
    );
  }

  get initVal(): string | number | undefined {
    if (this.isSigned) {
      return lib.clang_getEnumConstantDeclValue(this.handle);
    }
  }

  get unsignedInitVal(): string | number | undefined {
    if (!this.isSigned) {
      return lib.clang_getEnumConstantDeclUnsignedValue(this.handle);
    }
  }

  public toJSON(): string {
    return JSON.stringify({
      spelling: this.spelling,
      sourcePath: this.sourcePath,
      isDecl: this.isDecl,
      isMacroBuiltin: this.isMacroBuiltin,
      isSystemBuiltin: this.isSystemBuiltin,
      name: this.name,
      kind: this.kind,
      isSigned: this.isSigned,
      initVal: this.initVal,
      unsignedInitVal: this.unsignedInitVal,
    });
  }
}

export class StructDecl extends Decl {
  constructor(ptr: CXCursor, ptrKind: CXCursorKind, parent?: Cursor) {
    super(ptr, ptrKind, parent);
  }
}

export class FieldDecl extends Decl {
  constructor(ptr: CXCursor, ptrKind: CXCursorKind, parent?: Cursor) {
    super(ptr, ptrKind, parent);
  }
}

export class TypedefDecl extends Decl {
  constructor(ptr: CXCursor, ptrKind: CXCursorKind, parent?: Cursor) {
    super(ptr, ptrKind, parent);
  }

  get underlyingTypeClass(): Type {
    return new Type(lib.clang_getTypedefDeclUnderlyingType(this.handle));
  }
}
