# node-clangffi

[![CI](https://github.com/RainwayApp/node-clangffi/actions/workflows/ci.yml/badge.svg)](https://github.com/RainwayApp/node-clangffi/actions/workflows/ci.yml)
[![CD](https://github.com/RainwayApp/node-clangffi/actions/workflows/cd.yml/badge.svg)](https://github.com/RainwayApp/node-clangffi/actions/workflows/cd.yml)

Tools to generate Typescript FFI bindings for C/C++ libraries using [libclang](https://clang.llvm.org/doxygen/group__CINDEX.html) and [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi).

## Features

- [clangffi](https://github.com/RainwayApp/node-clangffi/tree/main/packages/clangffi) cli tool to generate Typescript bindings.
- [libclang-bindings](https://github.com/RainwayApp/node-clangffi/tree/main/packages/libclang-bindings) library for [libclang](https://clang.llvm.org/doxygen/group__CINDEX.html) bindings.
- Generates Typescript typings and [ref-napi](https://github.com/node-ffi-napi/ref-napi) types.
- Bring your own `libclang` binary.
- Validated against [llvm-project 13.0.0](https://github.com/RainwayApp/node-clangffi/tree/main/vendor).

See the following packages for more information:

- [clangffi](https://github.com/RainwayApp/node-clangffi/tree/main/packages/clangffi) - cli tool for generating bindings

![npm](https://img.shields.io/npm/v/clangffi)

- [libclang-bindings](https://github.com/RainwayApp/node-clangffi/tree/main/packages/libclang-bindings) - libclang bindings for node

![npm](https://img.shields.io/npm/v/libclang-bindings)

## Contributing

Contributions are welcome, but guidelines for how to get involved are not in place yet. As a result, please start by [opening an issue](https://github.com/rainwayapp/node-clangffi/issues/new). Thanks for your interest!

### Coding Guidelines

- This project contains a `.prettierrc` configuration file to help your editor contribute consistent code. For `vscode`, use [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- We use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to help with automatic semantic versioning. Please ensure your commit messages follow this format.

### Helpful commands

- `npm run bootstrap` to bootstrap the project.
- `npx lerna add <dep> packages/<project> [--dev]` to add a dep (`--dev` makes it a dev dep).
- `npm run build` builds all packages.
- `npm run clangffi` runs clangffi (remember to build first).
- `npm run generate-dogfood` re-generates our libclang bindings using `libclang-bindings` (ourself).

To get started:

```
# clone and enter the project directory
git clone --config core.autocrlf=false --recursive https://github.com/rainwayapp/node-clangffi.git
cd node-clangffi

# install deps
npm i

# bootstrap and build
npm run bootstrap && npm run build

# bootstrap once last time to ensure typings are present
npm run bootstrap
```
