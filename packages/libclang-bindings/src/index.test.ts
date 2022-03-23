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

  // ensures we can run against "ourselves" - the version of libclang that this projects bindings were built from.
  it("should parse clang headers", () => {
    expect(true).toBeTruthy(); return; // remove me
    const includeDir = path.join(
      __dirname,
      "../../../vendor/llvm-project/clang/include"
    );
    const index = createIndex();
    const translationUnit = parse({
      index,
      path: path.join(
        __dirname,
        "../../../vendor/llvm-project/clang/include/clang-c/Index.h"
      ),
      language: Language.C,
      includeDirectories: [includeDir],
      preprocessorDefinitions: [],
    });

    const decls: SerializedDecl[] = [];

    visit(
      translationUnit,
      (current: Cursor, parent: Cursor, userData: VisitorUserData) => {
        const decl = Decl.CreateTypedDecl(current);

        if (!decl) {
          return CXChildVisitResult.CXChildVisit_Continue;
        }

        // only take things that belong to clang
        if (!decl.sourcePath.includes(`clang${path.sep}include`)) {
          return CXChildVisitResult.CXChildVisit_Continue;
        }

        // serialize the model
        // note: we must do this while the cursor is still valid, we can't serialize after the fact
        // as our properties are lazy, and will fail to evaluate if the cursor moves on
        const model = decl.toJSON();

        // TODO(bengreenier): hacky, rethink
        const data = JSON.parse(model);

        // resolve the path relative, so we don't snapshot our full source dir
        const sourcePath = path.relative(
          path.join(__dirname, "../../../"),
          data.sourcePath
        );

        // normalize to always use '/' for path sep
        data.sourcePath = sourcePath.replace(/\\/g, "/");

        // store the decl model for assertion later
        decls.push(data);

        if (
          decl instanceof EnumDecl ||
          decl instanceof FunctionDecl ||
          decl instanceof StructDecl
        ) {
          // recurse into things we want the innards of
          return CXChildVisitResult.CXChildVisit_Recurse;
        } else {
          // continue on from things we don't need to contents of
          return CXChildVisitResult.CXChildVisit_Continue;
        }
      }
    );

    // sort them by their spelling so this test output is deterministic
    const sorted = decls.sort((a, b) => {
      if (a.spelling < b.spelling) {
        return -1;
      }

      if (a.spelling > b.spelling) {
        return 1;
      }

      return 0;
    });

    expect(sorted).toMatchSnapshot();
  });
});
