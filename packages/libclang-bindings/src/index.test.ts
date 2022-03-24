import path from "path";
import {
  parse,
  createIndex,
  visit,
  Language,
  VisitorUserData,
  CXChildVisitResult,
  loadLibClang,
} from "./index";
import { Cursor } from "./models/cursor";
import { Decl, EnumDecl, FunctionDecl, StructDecl } from "./models/decl";

// TODO(bengreenier): this may fall out of sync
// we're taking just the bits of decl we need since we don't have a full decl but instead a serialized and JSON.parsed one
type SerializedDecl = Pick<Decl, "sourcePath" | "spelling">;

const defaultLibPath =
  process.platform == "win32" ? "libclang.dll" : "libclang";

describe("libclang", () => {
  beforeAll(() => {
    const possibleUserPath = process.env["LIBCLANG_LIB_PATH"] ?? defaultLibPath;
    loadLibClang(possibleUserPath);
  });

  it("passes a dummy test", () => {
    expect(1 + 1).toEqual(2);
  });
});
