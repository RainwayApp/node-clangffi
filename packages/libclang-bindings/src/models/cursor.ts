import { lib } from "../lib";
import { CXCursorKind } from "../libclang";
import { CXCursor, INativeHandle } from "./types";
import { readNativeString } from "../util";
import { Type } from "../index";

export class Cursor implements INativeHandle<CXCursor> {
  constructor(private ptr: CXCursor) {}

  get handle(): CXCursor {
    return this.ptr;
  }

  get spelling(): string {
    return readNativeString(lib.clang_getCursorSpelling(this.ptr));
  }

  get kind(): CXCursorKind {
    return lib.clang_getCursorKind(this.ptr);
  }

  get type(): Type {
    return new Type(lib.clang_getCursorType(this.ptr));
  }

  get isDecl(): boolean {
    return lib.clang_isDeclaration(this.kind) == 1;
  }
}
