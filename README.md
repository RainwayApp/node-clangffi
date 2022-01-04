# node-clangffi

Tools to generate Typescript FFI bindings for C/C++ libraries using [libclang](https://clang.llvm.org/doxygen/group__CINDEX.html) and [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi).

## Features

- `clangffi` cli tool to generate Typescript bindings.
- `libclang-bindings` library for [libclang](https://clang.llvm.org/doxygen/group__CINDEX.html) bindings.
- Generates Typescript typings and [ref-napi](https://github.com/node-ffi-napi/ref-napi) types.
- Bring your own `libclang` binary.
- Validated against [llvm-project 13.0.0](./vendor).

See the following packages for more information:

- [clangffi](./packages/clangffi) - cli tool for generating bindings
- [libclang-bindings](./packages/libclang-bindings) - libclang bindings for node

## Contributing

Contributions are welcome, but guidelines for how to get involved are not in place yet. As a result, please start by [opening an issue](https://github.com/rainwayapp/node-clangffi/issues/new). Thanks for your interest!

### Helpful commands

- `npm run bootstrap` to bootstrap the project
- `npx lerna add <dep> packages/<project> [--dev]` to add a dep (`--dev` makes it a dev dep)
- `npm run build` builds all packages
- `npm run clangffi` runs clangffi (remember to build first)

```
git clone --config core.autocrlf=false --recursive https://github.com/rainwayapp/node-clangffi.git
```
