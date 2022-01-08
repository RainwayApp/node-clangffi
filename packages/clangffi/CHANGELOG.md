# Changelog

## [3.0.0](https://github.com/RainwayApp/node-clangffi/compare/clangffi-v2.0.0...clangffi-v3.0.0) (2022-01-08)


### ⚠ BREAKING CHANGES

* **selectors:** * feat(ffi-callback): support `ffi.Callback` params
* **type-decl:** * feat(underlying-type): Use UnderlyingType

### Features

* **selectors:** Refactor to use selectors ([#33](https://github.com/RainwayApp/node-clangffi/issues/33)) ([0801a4a](https://github.com/RainwayApp/node-clangffi/commit/0801a4a500e55af49ab68697ab7e81bb93df86a0))
* **type-decl:** Use UnderlyingType for `*Type` decls ([#31](https://github.com/RainwayApp/node-clangffi/issues/31)) ([0f5c539](https://github.com/RainwayApp/node-clangffi/commit/0f5c5398023d168c55628c813bbe76a78a1c52bf))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * libclang-bindings bumped from ^1.1.0 to ^2.0.0

## [2.0.0](https://github.com/RainwayApp/node-clangffi/compare/clangffi-v1.0.0...clangffi-v2.0.0) (2022-01-05)


### ⚠ BREAKING CHANGES

* **allow-symbols:** `allow` flag moved to `allow-file`

### Features

* **allow-symbols:** Better symbol selection ([#14](https://github.com/RainwayApp/node-clangffi/issues/14)) ([5e3fcbb](https://github.com/RainwayApp/node-clangffi/commit/5e3fcbb2dd2eeac6e88c1bfb18f663f91719b699))
* **attributed-type:** support attributed fns ([#23](https://github.com/RainwayApp/node-clangffi/issues/23)) ([62b5c0c](https://github.com/RainwayApp/node-clangffi/commit/62b5c0cb48ee997609e3f31448aef08d8d7c999f))


### Bug Fixes

* **bool:** Add `_Bool` c99 primitive ([#20](https://github.com/RainwayApp/node-clangffi/issues/20)) ([fd2360b](https://github.com/RainwayApp/node-clangffi/commit/fd2360ba4f6cae14920a0cd3225df53e1c877cf8)), closes [#19](https://github.com/RainwayApp/node-clangffi/issues/19)
* **primitives:** Better primitive support ([#13](https://github.com/RainwayApp/node-clangffi/issues/13)) ([4284a6f](https://github.com/RainwayApp/node-clangffi/commit/4284a6fa8db4d0b5c368a6c45ef4b030a7b8bdd7)), closes [#4](https://github.com/RainwayApp/node-clangffi/issues/4)
* **void-fn:** Handle void fn params ([#21](https://github.com/RainwayApp/node-clangffi/issues/21)) ([3f20c4a](https://github.com/RainwayApp/node-clangffi/commit/3f20c4adbac294457015dc3bff280ffce990d5d9)), closes [#16](https://github.com/RainwayApp/node-clangffi/issues/16)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * libclang-bindings bumped from ^1.0.0 to ^1.1.0

## [1.0.0](https://github.com/rainwayapp/node-clangffi/compare/clangffi-v1.0.0...clangffi-v1.0.0) (2022-01-05)


### Features

* **engines:** Add engines field ([#3](https://github.com/rainwayapp/node-clangffi/issues/3)) ([2c5b4a8](https://github.com/rainwayapp/node-clangffi/commit/2c5b4a80c0a728fcc4743aefc8537f07d5b07af1)), closes [#2](https://github.com/rainwayapp/node-clangffi/issues/2)
* **init:** Initial commit ([e74d425](https://github.com/rainwayapp/node-clangffi/commit/e74d425651050241d6460a7e35348ebd2f8932df))


### Bug Fixes

* **logging:** Improve clangffi logging ([28b1de4](https://github.com/rainwayapp/node-clangffi/commit/28b1de410d9fa799fa6c4894bc355bb947ddd276))


### Dependencies
