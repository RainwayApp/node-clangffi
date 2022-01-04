# clangffi

Generate Typescript FFI bindings for C/C++ libraries using [libclang](https://clang.llvm.org/doxygen/group__CINDEX.html) and [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi).

## Features

- Generates Typescript typings and [ref-napi](https://github.com/node-ffi-napi/ref-napi) types.
- Bring your own `libclang` binary.
- Validated against [llvm-project 13.0.0](../../vendor/llvm-project).

## Getting Started

With `libclang` in your `PATH`:

```
npx clangffi -i path/to/header.h -o path/to/generated/file.ts
```

For more information see `npx clangffi --help`:

```
Options:
      --version            Show version number                         [boolean]
  -i, --input              Input header path                 [string] [required]
  -o, --output             Output typescript file path       [string] [required]
  -L, --language           Language to parse input as
                                   [string] [choices: "c", "cpp"] [default: "c"]
  -I, --include-directory  Additional include directories to use during parsing
                                                           [array] [default: []]
      --allow              Additional file paths to allow symbols from
                                                           [array] [default: []]
      --crlf               Use crlf endings instead of lf
                                                      [boolean] [default: false]
      --no-sibling         Does not include sibling file symbols in the
                           generated bindings         [boolean] [default: false]
      --no-prettier        Does not run prettier on the generated binding output
                                                      [boolean] [default: false]
      --help               Show help                                   [boolean]

Generate typescript ffi-napi bindings for any c/c++ library using libclang.
```

Note that by default, only symbols that are directly sourced from the `input` header or included files that are next to the input header on disk (e.g. "sibling" files) will be included in the bindings. To include other symbols, specify the `--allow` flag, passing other source files. E.g. `--input path/to/initial/header.h --allow path/to/included/header.h`.
