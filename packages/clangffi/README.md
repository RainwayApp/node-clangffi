# clangffi

Generate Typescript FFI bindings for C/C++ libraries using [libclang](https://clang.llvm.org/doxygen/group__CINDEX.html) and [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi).

## Features

- Generates Typescript typings and [ref-napi](https://github.com/node-ffi-napi/ref-napi) types.
- Bring your own `libclang` binary.
- Validated against [llvm-project 13.0.0](../../vendor).

## Getting Started

- Install [LLVM 13](https://github.com/llvm/llvm-project/releases/tag/llvmorg-13.0.0), including `libclang`. For easiest use, ensure this adds it's `bin` directory to your `PATH`.

With `libclang` in your `PATH`:

```
npx clangffi -i path/to/header.h -o path/to/generated/file.ts
```

With `libclang` elsewhere:

```
npx clangffi --lib-path path/to/libclang -i path/to/header.h -o path/to/generated/file.ts
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
      --lib-path           The path to the libclang binary to load.     [string]
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

## Logging

`clangffi` uses [debug](https://github.com/debug-js/debug) for logging across a few different module names. As a result you can use the `DEBUG` environment variable to see various parts of `clangffi` at work.

- `DEBUG=*` - log everything `clangffi`, `ref`, and other dependencies do. Very verbose.
- `DEBUG=clangffi*` - log everything `clangffi` does.
- `DEBUG=clangffi:parser` - log all libclang AST parse operations.
- `DEBUG=clangffi:tsgen*` - log all typescript generation operations.
- `DEBUG=clangffi:tsgen:resolve` - log typescript generation type resolution.

For example:

> Note: this uses [cross-env](https://www.npmjs.com/package/cross-env) to provide one sample that works on both windows and linux. It is completely optional and you may set the `DEBUG` environment variable however you like.

```
npx cross-env DEBUG=clangffi* npx clangffi -i path/to/header.h -o path/to/generated/file.ts
```
