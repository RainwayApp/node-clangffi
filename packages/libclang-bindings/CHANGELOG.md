# Changelog

## [3.1.1](https://github.com/RainwayApp/node-clangffi/compare/libclang-bindings-v3.1.0...libclang-bindings-v3.1.1) (2022-06-16)


### Bug Fixes

* **struct-alias:** Support struct typedef aliasing ([#58](https://github.com/RainwayApp/node-clangffi/issues/58)) ([94b867a](https://github.com/RainwayApp/node-clangffi/commit/94b867a90bfbdb2d4ebabd192b6351901ced25ef))

## [3.1.0](https://github.com/RainwayApp/node-clangffi/compare/libclang-bindings-v3.0.0...libclang-bindings-v3.1.0) (2022-03-24)


### Features

* TypeScript codegen for union{} and struct{union{}} ([c37b54b](https://github.com/RainwayApp/node-clangffi/commit/c37b54b8c2aa3932966e40eb586fb75aa1cf311a))


### Bug Fixes

* **ci:** Actually snapshots are cool ([8beb6e4](https://github.com/RainwayApp/node-clangffi/commit/8beb6e4f9e64ed56d44e894c18e7f4f0edb5f95b))
* **ci:** re-enable the big test ([9aa9b25](https://github.com/RainwayApp/node-clangffi/commit/9aa9b256228d1eb1fef415b9a0edb6ab4b8fde4a))
* **ci:** Use LIBCLANG_LIB_PATH if it is available ([3c480af](https://github.com/RainwayApp/node-clangffi/commit/3c480af33348dd65a0e23adea42aee8d1a007324))
* Don't console.log ([0696609](https://github.com/RainwayApp/node-clangffi/commit/069660968a8c370a5293cea4a9bd11cdf8434391))

## [3.0.0](https://github.com/RainwayApp/node-clangffi/compare/libclang-bindings-v2.0.0...libclang-bindings-v3.0.0) (2022-01-12)


### ⚠ BREAKING CHANGES

* **selectors:** * feat(ffi-callback): support `ffi.Callback` params
* **type-decl:** * feat(underlying-type): Use UnderlyingType

### Features

* **attributed-type:** support attributed fns ([#23](https://github.com/RainwayApp/node-clangffi/issues/23)) ([62b5c0c](https://github.com/RainwayApp/node-clangffi/commit/62b5c0cb48ee997609e3f31448aef08d8d7c999f))
* **engines:** Add engines field ([#3](https://github.com/RainwayApp/node-clangffi/issues/3)) ([2c5b4a8](https://github.com/RainwayApp/node-clangffi/commit/2c5b4a80c0a728fcc4743aefc8537f07d5b07af1)), closes [#2](https://github.com/RainwayApp/node-clangffi/issues/2)
* **init:** Initial commit ([e74d425](https://github.com/RainwayApp/node-clangffi/commit/e74d425651050241d6460a7e35348ebd2f8932df))
* **selectors:** Refactor to use selectors ([#33](https://github.com/RainwayApp/node-clangffi/issues/33)) ([0801a4a](https://github.com/RainwayApp/node-clangffi/commit/0801a4a500e55af49ab68697ab7e81bb93df86a0))
* **type-decl:** Use UnderlyingType for `*Type` decls ([#31](https://github.com/RainwayApp/node-clangffi/issues/31)) ([0f5c539](https://github.com/RainwayApp/node-clangffi/commit/0f5c5398023d168c55628c813bbe76a78a1c52bf))


### Bug Fixes

* **libclang:** Update bindings ([#15](https://github.com/RainwayApp/node-clangffi/issues/15)) ([c1067f8](https://github.com/RainwayApp/node-clangffi/commit/c1067f84f232a3cae0e6357ec1469009a0d7fb4d))


### Dependencies



## [2.0.0](https://github.com/RainwayApp/node-clangffi/compare/libclang-bindings-v1.1.0...libclang-bindings-v2.0.0) (2022-01-08)


### ⚠ BREAKING CHANGES

* **selectors:** * feat(ffi-callback): support `ffi.Callback` params
* **type-decl:** * feat(underlying-type): Use UnderlyingType

### Features

* **selectors:** Refactor to use selectors ([#33](https://github.com/RainwayApp/node-clangffi/issues/33)) ([0801a4a](https://github.com/RainwayApp/node-clangffi/commit/0801a4a500e55af49ab68697ab7e81bb93df86a0))
* **type-decl:** Use UnderlyingType for `*Type` decls ([#31](https://github.com/RainwayApp/node-clangffi/issues/31)) ([0f5c539](https://github.com/RainwayApp/node-clangffi/commit/0f5c5398023d168c55628c813bbe76a78a1c52bf))


### Dependencies



## [1.1.0](https://github.com/RainwayApp/node-clangffi/compare/libclang-bindings-v1.0.0...libclang-bindings-v1.1.0) (2022-01-05)


### Features

* **attributed-type:** support attributed fns ([#23](https://github.com/RainwayApp/node-clangffi/issues/23)) ([62b5c0c](https://github.com/RainwayApp/node-clangffi/commit/62b5c0cb48ee997609e3f31448aef08d8d7c999f))


### Bug Fixes

* **libclang:** Update bindings ([#15](https://github.com/RainwayApp/node-clangffi/issues/15)) ([c1067f8](https://github.com/RainwayApp/node-clangffi/commit/c1067f84f232a3cae0e6357ec1469009a0d7fb4d))


### Dependencies



## [1.0.0](https://github.com/rainwayapp/node-clangffi/compare/libclang-bindings-v1.0.0...libclang-bindings-v1.0.0) (2022-01-05)


### Features

* **engines:** Add engines field ([#3](https://github.com/rainwayapp/node-clangffi/issues/3)) ([2c5b4a8](https://github.com/rainwayapp/node-clangffi/commit/2c5b4a80c0a728fcc4743aefc8537f07d5b07af1)), closes [#2](https://github.com/rainwayapp/node-clangffi/issues/2)
* **init:** Initial commit ([e74d425](https://github.com/rainwayapp/node-clangffi/commit/e74d425651050241d6460a7e35348ebd2f8932df))


### Dependencies
