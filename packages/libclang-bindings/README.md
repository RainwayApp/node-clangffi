# libclang

> Work in progress: Currently this project contains just enough to walk an AST, as we're only using it for FFI binding generation.

[libclang](https://clang.llvm.org/doxygen/group__CINDEX.html) bindings for node. Actual `libclang` binary not included (yet).

## How to use

- [Install a libclang release](https://github.com/llvm/llvm-project/releases) - for stability, we recommend using the version [that is a captured as a submodule here](./vendor/llvm-project).
- Create a `CXIndex` (`createIndex`), invoke `parse` to get a `TranslationUnit` and finally use `visit` to walk the `TranslationUnit` AST.

For instance:

```
import {createIndex, parse, visit} from "libclang"

// create a CXIndex
const index = createIndex();

// parse a header to a CXTranslationUnit
const translationUnit = parse({
    index,
    path: "path/to/my/header.h",
    language: Language.C,
    includeDirectories: []
});

// visit symbols in the unit, continuing after each
visit(translationUnit, (cur, parent, userData) => {
    console.log(cur.spelling);
    return CXChildVisitResult.CXChildVisit_Continue;
});
```

See [the tests](./src/index.test.ts) for more info.

## Performance

Performance is not very good, due to [the overhead introduced by ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi#call-overhead)
and the fact that each visit callback crosses the ffi boundary.

To process `libclang` headers on my `i9-9900K (8 cores)` CPU takes about `5m`. 😅
