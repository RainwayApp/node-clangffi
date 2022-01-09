# libclang-bindings

![npm](https://img.shields.io/npm/v/libclang-bindings)

Provides [libclang](https://clang.llvm.org/doxygen/group__CINDEX.html) bindings for node. Allows the caller to invoke `libclang` functions from within node using [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi). Note that this library does **NOT** include a `libclang` binary - you must install one yourself.

## How to use

- [Install a libclang release](https://github.com/llvm/llvm-project/releases) - for stability, we recommend using the version [that is a captured as a submodule here](./vendor).

```
import {
  loadLibClang,
  createIndex,
  parse,
  visit,
  Language,
  CXChildVisitResult,
  Decl,
  FunctionDecl,
} from "./index";

// using a non-qualified path for the lib will search for the binary in `PATH`.
const defaultLibPath =
  process.platform == "win32" ? "libclang.dll" : "libclang";

// load the library first
loadLibClang(defaultLibPath);

// create an index (storage for symbols)
const cxIndex = createIndex();

// parse a header into a translation unit
// using the given language and additional include directories
const translationUnit = parse({
  path: "path/to/header.h",
  language: Language.C,
  index: cxIndex,
  includeDirectories: [],
});

// walk the translationUnit AST
visit(translationUnit, (current, parent, userData) => {
  // see if the cursor is a decl
  const maybeDecl = Decl.CreateTypedDecl(current, parent);

  // if it came back as a typed decl, perhaps we're more interested in it
  if (maybeDecl) {
    // for example, we can check if it's a function decl
    if (maybeDecl instanceof FunctionDecl) {
      const fnDecl = maybeDecl as FunctionDecl;
      // and if it is, choose to log it's name and return type
      console.log(
        `${fnDecl.name} returns ${fnDecl.typeClass.returnType?.name}`
      );
    }

    // there are many other subclasses of `Decl` too
    // see `Decl.CreateTypedDecl` for more info
  }

  // continue to walk the ast
  return CXChildVisitResult.CXChildVisit_Continue;
});
```

See [the tests](./src/index.test.ts) for more info.

## Performance

Performance is still a bit slow, due to [the overhead introduced by ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi#call-overhead)
and the fact that each visit callback crosses the ffi boundary.

To process `libclang` headers on my `i9-9900K (8 cores)` CPU takes about `5m`. 😅
