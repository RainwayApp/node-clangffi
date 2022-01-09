# clangffi

![npm](https://img.shields.io/npm/v/clangffi)

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
      --version              Show version number                                                                                                                                                                                                    [boolean]
  -i, --input                Path to the header from which we will generate bindings.                                                                                                                                                     [string] [required]
  -o, --output               Path to the output typescript file into which we will write the generated bindings.                                                                                                                          [string] [required]
  -L, --language             The language libclang should parse the input as.                                                                                                                                   [string] [choices: "c", "cpp"] [default: "c"]
  -I, --include-directory    Additional include directories to use during parsing.                                                                                                                                                      [array] [default: []]
  -D, --define               Preprocessor definitions to use during parsing.                                                                                                                                                            [array] [default: []]
  -R, --remap                Custom native symbol mappings that override the default.                                                                                                                                                   [array] [default: []]
      --crlf                 Flag indicating if `crlf` line endings should be used instead of `lf`.                                                                                                                                [boolean] [default: false]
      --prettier             Flag indicating if `prettier` will be run against the bindings before output.                                                                                                                          [boolean] [default: true]
      --lib-path             Specifies an absolute path to `libclang` which will be used instead of searching `PATH`.                                                                                                                                [string]
      --default-symbols      Flag indicating if symbols in the `input` file will be automatically included in the bindings.                                                                                                         [boolean] [default: true]
      --include              Symbols to explicitly include in the bindings.                                                                                                                                                             [array] [default: []]
      --include-file         File paths to explicitly include symbols from, in addition to the default. If a directory path is given symbols from all files in that directory will be included.                                         [array] [default: []]
      --exclude              Symbols to explicitly exclude from the bindings. Overrides `include` if there is a conflict.                                                                                                               [array] [default: []]
      --hard-remap, --remap  Custom native to node symbol mappings that override the default.                                                                                                                                           [array] [default: []]
      --help                 Show help                                                                                                                                                                                                              [boolean]

Examples:
  clangffi --input path/to/header.h --output path/to/output.ts                                           Generate bindings with `libclang` in `PATH`.
  clangffi --lib-path path/to/libclang --input path/to/header.h --output path/to/output.ts               Generate bindings with a custom `libclang` path.
  clangffi --input path/to/header.h --output path/to/output.ts --include *Cb                             Generate bindings, including all symbols with names ending in `Cb`.
  clangffi --input path/to/header.h --output path/to/output.ts --remap 'time_t=long long'                Generate bindings, remapping symbol `time_t` to native type `long long`.
  clangffi --input path/to/header.h --output path/to/output.ts --hard-remap 'time_t=ref.types.longlong'  Generate bindings, hard remapping symbol `time_t` to node type `ref.types.longlong`.

Generate typescript ffi-napi bindings for any c/c++ library using libclang.
```

## Selecting symbols

By default, only symbols from the `input` file are included. This behavior can be disabled with `--no-default-symbols`.

To include additional symbols, use `--include` and `--include-file` - these flags include symbols by name, or symbols within a file, respectively. Further, to exclude symbols use `--exclude`, which will override any explicitly included symbols if there's a conflict.

### Selection strings

> This type of string is accepted for `--include`, `--exclude`. It is also used for the key value in `--remap` and `--hard-remap`.

A selection string can be used to filter symbols by their names. They support wildcards (e.g. `*`) to match any character in a symbol name. They also provide a way to identify a symbol based on it's parent, using `:` as a separator. For instance, to match a child field named `MyField` of a struct named `MyStruct` we could use the selector string `MyStruct:MyField`. This notation can be expanded to succinctly identify multiple children, e.g. `MyStruct:{MyFirstField, MySecondField}`. Further, it can be used to identify function parameters by their index - e.g. `MyFunc:0` to select the first parameter in a function named `MyFunc`. The full spec for a selection string can be found below:

`<symbolTitle>[:<symbolChild>]` or `<symbolTitle>[:{<symbolChild>, ...}]`

Where **symbolTitle** is:

```
[*A-Za-z0-9_\-]+
```

Where **symbolChild** is:

```
[*A-Za-z0-9_\- ]+
```

For example, here are some **valid selectors**:

```
MyType
MyType:MyParam
MyType:*Param
MyType:{MyParam1, MyParam2}
MyFunc:0
```

And some **invalid selectors**:

```
Fn1:param1, Fn2:param2
Fn1:{param1
Fn1:param1, param2
Fn1:param1}
```

See [the tests](./packages/clangffi/src/lib/selector.test.ts) for more info.

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
