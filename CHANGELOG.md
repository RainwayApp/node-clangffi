# Changelog

## [1.0.0](https://github.com/RainwayApp/node-clangffi/compare/node-clangffi-lerna-workspace-v1.0.0...node-clangffi-lerna-workspace-v1.0.0) (2022-06-16)


### ⚠ BREAKING CHANGES

* **selectors:** * feat(ffi-callback): support `ffi.Callback` params
* **type-decl:** * feat(underlying-type): Use UnderlyingType
* **allow-symbols:** `allow` flag moved to `allow-file`

### Features

* --clean-enum-constants flag ([b5dff91](https://github.com/RainwayApp/node-clangffi/commit/b5dff91784735bf9a3720ad7ccc2c4d218cd109c))
* **allow-symbols:** Better symbol selection ([#14](https://github.com/RainwayApp/node-clangffi/issues/14)) ([5e3fcbb](https://github.com/RainwayApp/node-clangffi/commit/5e3fcbb2dd2eeac6e88c1bfb18f663f91719b699))
* **attributed-type:** support attributed fns ([#23](https://github.com/RainwayApp/node-clangffi/issues/23)) ([62b5c0c](https://github.com/RainwayApp/node-clangffi/commit/62b5c0cb48ee997609e3f31448aef08d8d7c999f))
* **engines:** Add engines field ([#3](https://github.com/RainwayApp/node-clangffi/issues/3)) ([2c5b4a8](https://github.com/RainwayApp/node-clangffi/commit/2c5b4a80c0a728fcc4743aefc8537f07d5b07af1)), closes [#2](https://github.com/RainwayApp/node-clangffi/issues/2)
* **init:** Initial commit ([e74d425](https://github.com/RainwayApp/node-clangffi/commit/e74d425651050241d6460a7e35348ebd2f8932df))
* **selectors:** Refactor to use selectors ([#33](https://github.com/RainwayApp/node-clangffi/issues/33)) ([0801a4a](https://github.com/RainwayApp/node-clangffi/commit/0801a4a500e55af49ab68697ab7e81bb93df86a0))
* **type-decl:** Use UnderlyingType for `*Type` decls ([#31](https://github.com/RainwayApp/node-clangffi/issues/31)) ([0f5c539](https://github.com/RainwayApp/node-clangffi/commit/0f5c5398023d168c55628c813bbe76a78a1c52bf))
* TypeScript codegen for union{} and struct{union{}} ([c37b54b](https://github.com/RainwayApp/node-clangffi/commit/c37b54b8c2aa3932966e40eb586fb75aa1cf311a))


### Bug Fixes

* **bool:** Add `_Bool` c99 primitive ([#20](https://github.com/RainwayApp/node-clangffi/issues/20)) ([fd2360b](https://github.com/RainwayApp/node-clangffi/commit/fd2360ba4f6cae14920a0cd3225df53e1c877cf8)), closes [#19](https://github.com/RainwayApp/node-clangffi/issues/19)
* **cd:** Add back command ([4a48599](https://github.com/RainwayApp/node-clangffi/commit/4a4859912656b5bebdca4b0817fa83f8aaecd8e6))
* **cd:** Force release-as 1.0.0 ([e909137](https://github.com/RainwayApp/node-clangffi/commit/e90913745c02aadbc9b84fcbc04889d615d84450))
* **cd:** skip gh release for root ([94dca5b](https://github.com/RainwayApp/node-clangffi/commit/94dca5b204cdcc096ae29ff1f3b82a067ebeaeaf))
* **cd:** Use `draft` for root package ([f52e791](https://github.com/RainwayApp/node-clangffi/commit/f52e79156d317788972ded83d3d7dd8dbd7b3f2c))
* **ci:** Actually snapshots are cool ([8beb6e4](https://github.com/RainwayApp/node-clangffi/commit/8beb6e4f9e64ed56d44e894c18e7f4f0edb5f95b))
* **ci:** oh jeez, can I force a unified enum ABI ([d93ef69](https://github.com/RainwayApp/node-clangffi/commit/d93ef69b715a9418ec8b93129be41ced3305b8a2))
* **ci:** re-enable the big test ([9aa9b25](https://github.com/RainwayApp/node-clangffi/commit/9aa9b256228d1eb1fef415b9a0edb6ab4b8fde4a))
* **ci:** Use LIBCLANG_LIB_PATH if it is available ([3c480af](https://github.com/RainwayApp/node-clangffi/commit/3c480af33348dd65a0e23adea42aee8d1a007324))
* **ci:** use remap instead of icky forcing ([d01449f](https://github.com/RainwayApp/node-clangffi/commit/d01449f4eee3205b03a1198c0c873643d1e6983d))
* Don't console.log ([0696609](https://github.com/RainwayApp/node-clangffi/commit/069660968a8c370a5293cea4a9bd11cdf8434391))
* **jest:** Add "moduleNameMapper" that strips .js extensions ([7c894bd](https://github.com/RainwayApp/node-clangffi/commit/7c894bdbd09e14da62c4ee20b41743a78e4dcc29))
* **libclang:** Update bindings ([#15](https://github.com/RainwayApp/node-clangffi/issues/15)) ([c1067f8](https://github.com/RainwayApp/node-clangffi/commit/c1067f84f232a3cae0e6357ec1469009a0d7fb4d))
* **logging:** Improve clangffi logging ([28b1de4](https://github.com/RainwayApp/node-clangffi/commit/28b1de410d9fa799fa6c4894bc355bb947ddd276))
* **matcher:** Move matcher to dep from dev-dep ([#44](https://github.com/RainwayApp/node-clangffi/issues/44)) ([520ab38](https://github.com/RainwayApp/node-clangffi/commit/520ab386e9eed4c85273ffd8289b1d0b7d992713))
* **primitives:** Better primitive support ([#13](https://github.com/RainwayApp/node-clangffi/issues/13)) ([4284a6f](https://github.com/RainwayApp/node-clangffi/commit/4284a6fa8db4d0b5c368a6c45ef4b030a7b8bdd7)), closes [#4](https://github.com/RainwayApp/node-clangffi/issues/4)
* **release-please:** remove release-as directive ([b6a5f55](https://github.com/RainwayApp/node-clangffi/commit/b6a5f553b7d726a4ead14ac69463b6cca75e47d9))
* Restore ".js" in relative imports ([ba84ae9](https://github.com/RainwayApp/node-clangffi/commit/ba84ae94e07ff3d3b64b8a10582f132061e9c6be))
* **struct-alias:** Support struct typedef aliasing ([#58](https://github.com/RainwayApp/node-clangffi/issues/58)) ([94b867a](https://github.com/RainwayApp/node-clangffi/commit/94b867a90bfbdb2d4ebabd192b6351901ced25ef))
* **void-fn:** Handle void fn params ([#21](https://github.com/RainwayApp/node-clangffi/issues/21)) ([3f20c4a](https://github.com/RainwayApp/node-clangffi/commit/3f20c4adbac294457015dc3bff280ffce990d5d9)), closes [#16](https://github.com/RainwayApp/node-clangffi/issues/16)

## [1.0.0](https://github.com/RainwayApp/node-clangffi/compare/node-clangffi-lerna-workspace-v1.0.0...node-clangffi-lerna-workspace-v1.0.0) (2022-03-24)


### ⚠ BREAKING CHANGES

* **selectors:** * feat(ffi-callback): support `ffi.Callback` params
* **type-decl:** * feat(underlying-type): Use UnderlyingType
* **allow-symbols:** `allow` flag moved to `allow-file`

### Features

* --clean-enum-constants flag ([b5dff91](https://github.com/RainwayApp/node-clangffi/commit/b5dff91784735bf9a3720ad7ccc2c4d218cd109c))
* **allow-symbols:** Better symbol selection ([#14](https://github.com/RainwayApp/node-clangffi/issues/14)) ([5e3fcbb](https://github.com/RainwayApp/node-clangffi/commit/5e3fcbb2dd2eeac6e88c1bfb18f663f91719b699))
* **attributed-type:** support attributed fns ([#23](https://github.com/RainwayApp/node-clangffi/issues/23)) ([62b5c0c](https://github.com/RainwayApp/node-clangffi/commit/62b5c0cb48ee997609e3f31448aef08d8d7c999f))
* **engines:** Add engines field ([#3](https://github.com/RainwayApp/node-clangffi/issues/3)) ([2c5b4a8](https://github.com/RainwayApp/node-clangffi/commit/2c5b4a80c0a728fcc4743aefc8537f07d5b07af1)), closes [#2](https://github.com/RainwayApp/node-clangffi/issues/2)
* **init:** Initial commit ([e74d425](https://github.com/RainwayApp/node-clangffi/commit/e74d425651050241d6460a7e35348ebd2f8932df))
* **selectors:** Refactor to use selectors ([#33](https://github.com/RainwayApp/node-clangffi/issues/33)) ([0801a4a](https://github.com/RainwayApp/node-clangffi/commit/0801a4a500e55af49ab68697ab7e81bb93df86a0))
* **type-decl:** Use UnderlyingType for `*Type` decls ([#31](https://github.com/RainwayApp/node-clangffi/issues/31)) ([0f5c539](https://github.com/RainwayApp/node-clangffi/commit/0f5c5398023d168c55628c813bbe76a78a1c52bf))
* TypeScript codegen for union{} and struct{union{}} ([c37b54b](https://github.com/RainwayApp/node-clangffi/commit/c37b54b8c2aa3932966e40eb586fb75aa1cf311a))


### Bug Fixes

* **bool:** Add `_Bool` c99 primitive ([#20](https://github.com/RainwayApp/node-clangffi/issues/20)) ([fd2360b](https://github.com/RainwayApp/node-clangffi/commit/fd2360ba4f6cae14920a0cd3225df53e1c877cf8)), closes [#19](https://github.com/RainwayApp/node-clangffi/issues/19)
* **cd:** Add back command ([4a48599](https://github.com/RainwayApp/node-clangffi/commit/4a4859912656b5bebdca4b0817fa83f8aaecd8e6))
* **cd:** Force release-as 1.0.0 ([e909137](https://github.com/RainwayApp/node-clangffi/commit/e90913745c02aadbc9b84fcbc04889d615d84450))
* **cd:** skip gh release for root ([94dca5b](https://github.com/RainwayApp/node-clangffi/commit/94dca5b204cdcc096ae29ff1f3b82a067ebeaeaf))
* **cd:** Use `draft` for root package ([f52e791](https://github.com/RainwayApp/node-clangffi/commit/f52e79156d317788972ded83d3d7dd8dbd7b3f2c))
* **ci:** Actually snapshots are cool ([8beb6e4](https://github.com/RainwayApp/node-clangffi/commit/8beb6e4f9e64ed56d44e894c18e7f4f0edb5f95b))
* **ci:** oh jeez, can I force a unified enum ABI ([d93ef69](https://github.com/RainwayApp/node-clangffi/commit/d93ef69b715a9418ec8b93129be41ced3305b8a2))
* **ci:** re-enable the big test ([9aa9b25](https://github.com/RainwayApp/node-clangffi/commit/9aa9b256228d1eb1fef415b9a0edb6ab4b8fde4a))
* **ci:** Use LIBCLANG_LIB_PATH if it is available ([3c480af](https://github.com/RainwayApp/node-clangffi/commit/3c480af33348dd65a0e23adea42aee8d1a007324))
* **ci:** use remap instead of icky forcing ([d01449f](https://github.com/RainwayApp/node-clangffi/commit/d01449f4eee3205b03a1198c0c873643d1e6983d))
* Don't console.log ([0696609](https://github.com/RainwayApp/node-clangffi/commit/069660968a8c370a5293cea4a9bd11cdf8434391))
* **jest:** Add "moduleNameMapper" that strips .js extensions ([7c894bd](https://github.com/RainwayApp/node-clangffi/commit/7c894bdbd09e14da62c4ee20b41743a78e4dcc29))
* **libclang:** Update bindings ([#15](https://github.com/RainwayApp/node-clangffi/issues/15)) ([c1067f8](https://github.com/RainwayApp/node-clangffi/commit/c1067f84f232a3cae0e6357ec1469009a0d7fb4d))
* **logging:** Improve clangffi logging ([28b1de4](https://github.com/RainwayApp/node-clangffi/commit/28b1de410d9fa799fa6c4894bc355bb947ddd276))
* **matcher:** Move matcher to dep from dev-dep ([#44](https://github.com/RainwayApp/node-clangffi/issues/44)) ([520ab38](https://github.com/RainwayApp/node-clangffi/commit/520ab386e9eed4c85273ffd8289b1d0b7d992713))
* **primitives:** Better primitive support ([#13](https://github.com/RainwayApp/node-clangffi/issues/13)) ([4284a6f](https://github.com/RainwayApp/node-clangffi/commit/4284a6fa8db4d0b5c368a6c45ef4b030a7b8bdd7)), closes [#4](https://github.com/RainwayApp/node-clangffi/issues/4)
* **release-please:** remove release-as directive ([b6a5f55](https://github.com/RainwayApp/node-clangffi/commit/b6a5f553b7d726a4ead14ac69463b6cca75e47d9))
* Restore ".js" in relative imports ([ba84ae9](https://github.com/RainwayApp/node-clangffi/commit/ba84ae94e07ff3d3b64b8a10582f132061e9c6be))
* **void-fn:** Handle void fn params ([#21](https://github.com/RainwayApp/node-clangffi/issues/21)) ([3f20c4a](https://github.com/RainwayApp/node-clangffi/commit/3f20c4adbac294457015dc3bff280ffce990d5d9)), closes [#16](https://github.com/RainwayApp/node-clangffi/issues/16)

## [1.0.0](https://github.com/RainwayApp/node-clangffi/compare/node-clangffi-lerna-workspace-v1.0.0...node-clangffi-lerna-workspace-v1.0.0) (2022-03-24)


### ⚠ BREAKING CHANGES

* **selectors:** * feat(ffi-callback): support `ffi.Callback` params 
* **type-decl:** * feat(underlying-type): Use UnderlyingType
* **allow-symbols:** `allow` flag moved to `allow-file`

### Features

* --clean-enum-constants flag ([b5dff91](https://github.com/RainwayApp/node-clangffi/commit/b5dff91784735bf9a3720ad7ccc2c4d218cd109c))
* **allow-symbols:** Better symbol selection ([#14](https://github.com/RainwayApp/node-clangffi/issues/14)) ([5e3fcbb](https://github.com/RainwayApp/node-clangffi/commit/5e3fcbb2dd2eeac6e88c1bfb18f663f91719b699))
* **attributed-type:** support attributed fns ([#23](https://github.com/RainwayApp/node-clangffi/issues/23)) ([62b5c0c](https://github.com/RainwayApp/node-clangffi/commit/62b5c0cb48ee997609e3f31448aef08d8d7c999f))
* **engines:** Add engines field ([#3](https://github.com/RainwayApp/node-clangffi/issues/3)) ([2c5b4a8](https://github.com/RainwayApp/node-clangffi/commit/2c5b4a80c0a728fcc4743aefc8537f07d5b07af1)), closes [#2](https://github.com/RainwayApp/node-clangffi/issues/2)
* **init:** Initial commit ([e74d425](https://github.com/RainwayApp/node-clangffi/commit/e74d425651050241d6460a7e35348ebd2f8932df))
* **selectors:** Refactor to use selectors ([#33](https://github.com/RainwayApp/node-clangffi/issues/33)) ([0801a4a](https://github.com/RainwayApp/node-clangffi/commit/0801a4a500e55af49ab68697ab7e81bb93df86a0))
* **type-decl:** Use UnderlyingType for `*Type` decls ([#31](https://github.com/RainwayApp/node-clangffi/issues/31)) ([0f5c539](https://github.com/RainwayApp/node-clangffi/commit/0f5c5398023d168c55628c813bbe76a78a1c52bf))
* TypeScript codegen for union{} and struct{union{}} ([c37b54b](https://github.com/RainwayApp/node-clangffi/commit/c37b54b8c2aa3932966e40eb586fb75aa1cf311a))


### Bug Fixes

* **bool:** Add `_Bool` c99 primitive ([#20](https://github.com/RainwayApp/node-clangffi/issues/20)) ([fd2360b](https://github.com/RainwayApp/node-clangffi/commit/fd2360ba4f6cae14920a0cd3225df53e1c877cf8)), closes [#19](https://github.com/RainwayApp/node-clangffi/issues/19)
* **cd:** Add back command ([4a48599](https://github.com/RainwayApp/node-clangffi/commit/4a4859912656b5bebdca4b0817fa83f8aaecd8e6))
* **cd:** Force release-as 1.0.0 ([e909137](https://github.com/RainwayApp/node-clangffi/commit/e90913745c02aadbc9b84fcbc04889d615d84450))
* **cd:** skip gh release for root ([94dca5b](https://github.com/RainwayApp/node-clangffi/commit/94dca5b204cdcc096ae29ff1f3b82a067ebeaeaf))
* **cd:** Use `draft` for root package ([f52e791](https://github.com/RainwayApp/node-clangffi/commit/f52e79156d317788972ded83d3d7dd8dbd7b3f2c))
* **ci:** Actually snapshots are cool ([8beb6e4](https://github.com/RainwayApp/node-clangffi/commit/8beb6e4f9e64ed56d44e894c18e7f4f0edb5f95b))
* **ci:** oh jeez, can I force a unified enum ABI ([d93ef69](https://github.com/RainwayApp/node-clangffi/commit/d93ef69b715a9418ec8b93129be41ced3305b8a2))
* **ci:** re-enable the big test ([9aa9b25](https://github.com/RainwayApp/node-clangffi/commit/9aa9b256228d1eb1fef415b9a0edb6ab4b8fde4a))
* **ci:** Use LIBCLANG_LIB_PATH if it is available ([3c480af](https://github.com/RainwayApp/node-clangffi/commit/3c480af33348dd65a0e23adea42aee8d1a007324))
* **ci:** use remap instead of icky forcing ([d01449f](https://github.com/RainwayApp/node-clangffi/commit/d01449f4eee3205b03a1198c0c873643d1e6983d))
* Don't console.log ([0696609](https://github.com/RainwayApp/node-clangffi/commit/069660968a8c370a5293cea4a9bd11cdf8434391))
* **libclang:** Update bindings ([#15](https://github.com/RainwayApp/node-clangffi/issues/15)) ([c1067f8](https://github.com/RainwayApp/node-clangffi/commit/c1067f84f232a3cae0e6357ec1469009a0d7fb4d))
* **logging:** Improve clangffi logging ([28b1de4](https://github.com/RainwayApp/node-clangffi/commit/28b1de410d9fa799fa6c4894bc355bb947ddd276))
* **matcher:** Move matcher to dep from dev-dep ([#44](https://github.com/RainwayApp/node-clangffi/issues/44)) ([520ab38](https://github.com/RainwayApp/node-clangffi/commit/520ab386e9eed4c85273ffd8289b1d0b7d992713))
* **primitives:** Better primitive support ([#13](https://github.com/RainwayApp/node-clangffi/issues/13)) ([4284a6f](https://github.com/RainwayApp/node-clangffi/commit/4284a6fa8db4d0b5c368a6c45ef4b030a7b8bdd7)), closes [#4](https://github.com/RainwayApp/node-clangffi/issues/4)
* **release-please:** remove release-as directive ([b6a5f55](https://github.com/RainwayApp/node-clangffi/commit/b6a5f553b7d726a4ead14ac69463b6cca75e47d9))
* **void-fn:** Handle void fn params ([#21](https://github.com/RainwayApp/node-clangffi/issues/21)) ([3f20c4a](https://github.com/RainwayApp/node-clangffi/commit/3f20c4adbac294457015dc3bff280ffce990d5d9)), closes [#16](https://github.com/RainwayApp/node-clangffi/issues/16)

## [1.0.0](https://github.com/RainwayApp/node-clangffi/compare/node-clangffi-lerna-workspace-v1.0.0...node-clangffi-lerna-workspace-v1.0.0) (2022-03-15)


### ⚠ BREAKING CHANGES

* **selectors:** * feat(ffi-callback): support `ffi.Callback` params
* **type-decl:** * feat(underlying-type): Use UnderlyingType
* **allow-symbols:** `allow` flag moved to `allow-file`

### Features

* --clean-enum-constants flag ([b5dff91](https://github.com/RainwayApp/node-clangffi/commit/b5dff91784735bf9a3720ad7ccc2c4d218cd109c))
* **allow-symbols:** Better symbol selection ([#14](https://github.com/RainwayApp/node-clangffi/issues/14)) ([5e3fcbb](https://github.com/RainwayApp/node-clangffi/commit/5e3fcbb2dd2eeac6e88c1bfb18f663f91719b699))
* **attributed-type:** support attributed fns ([#23](https://github.com/RainwayApp/node-clangffi/issues/23)) ([62b5c0c](https://github.com/RainwayApp/node-clangffi/commit/62b5c0cb48ee997609e3f31448aef08d8d7c999f))
* **engines:** Add engines field ([#3](https://github.com/RainwayApp/node-clangffi/issues/3)) ([2c5b4a8](https://github.com/RainwayApp/node-clangffi/commit/2c5b4a80c0a728fcc4743aefc8537f07d5b07af1)), closes [#2](https://github.com/RainwayApp/node-clangffi/issues/2)
* **init:** Initial commit ([e74d425](https://github.com/RainwayApp/node-clangffi/commit/e74d425651050241d6460a7e35348ebd2f8932df))
* **selectors:** Refactor to use selectors ([#33](https://github.com/RainwayApp/node-clangffi/issues/33)) ([0801a4a](https://github.com/RainwayApp/node-clangffi/commit/0801a4a500e55af49ab68697ab7e81bb93df86a0))
* **type-decl:** Use UnderlyingType for `*Type` decls ([#31](https://github.com/RainwayApp/node-clangffi/issues/31)) ([0f5c539](https://github.com/RainwayApp/node-clangffi/commit/0f5c5398023d168c55628c813bbe76a78a1c52bf))


### Bug Fixes

* **bool:** Add `_Bool` c99 primitive ([#20](https://github.com/RainwayApp/node-clangffi/issues/20)) ([fd2360b](https://github.com/RainwayApp/node-clangffi/commit/fd2360ba4f6cae14920a0cd3225df53e1c877cf8)), closes [#19](https://github.com/RainwayApp/node-clangffi/issues/19)
* **cd:** Add back command ([4a48599](https://github.com/RainwayApp/node-clangffi/commit/4a4859912656b5bebdca4b0817fa83f8aaecd8e6))
* **cd:** Force release-as 1.0.0 ([e909137](https://github.com/RainwayApp/node-clangffi/commit/e90913745c02aadbc9b84fcbc04889d615d84450))
* **cd:** skip gh release for root ([94dca5b](https://github.com/RainwayApp/node-clangffi/commit/94dca5b204cdcc096ae29ff1f3b82a067ebeaeaf))
* **cd:** Use `draft` for root package ([f52e791](https://github.com/RainwayApp/node-clangffi/commit/f52e79156d317788972ded83d3d7dd8dbd7b3f2c))
* **libclang:** Update bindings ([#15](https://github.com/RainwayApp/node-clangffi/issues/15)) ([c1067f8](https://github.com/RainwayApp/node-clangffi/commit/c1067f84f232a3cae0e6357ec1469009a0d7fb4d))
* **logging:** Improve clangffi logging ([28b1de4](https://github.com/RainwayApp/node-clangffi/commit/28b1de410d9fa799fa6c4894bc355bb947ddd276))
* **matcher:** Move matcher to dep from dev-dep ([#44](https://github.com/RainwayApp/node-clangffi/issues/44)) ([520ab38](https://github.com/RainwayApp/node-clangffi/commit/520ab386e9eed4c85273ffd8289b1d0b7d992713))
* **primitives:** Better primitive support ([#13](https://github.com/RainwayApp/node-clangffi/issues/13)) ([4284a6f](https://github.com/RainwayApp/node-clangffi/commit/4284a6fa8db4d0b5c368a6c45ef4b030a7b8bdd7)), closes [#4](https://github.com/RainwayApp/node-clangffi/issues/4)
* **release-please:** remove release-as directive ([b6a5f55](https://github.com/RainwayApp/node-clangffi/commit/b6a5f553b7d726a4ead14ac69463b6cca75e47d9))
* **void-fn:** Handle void fn params ([#21](https://github.com/RainwayApp/node-clangffi/issues/21)) ([3f20c4a](https://github.com/RainwayApp/node-clangffi/commit/3f20c4adbac294457015dc3bff280ffce990d5d9)), closes [#16](https://github.com/RainwayApp/node-clangffi/issues/16)

## [1.0.0](https://github.com/RainwayApp/node-clangffi/compare/node-clangffi-lerna-workspace-v1.0.0...node-clangffi-lerna-workspace-v1.0.0) (2022-01-12)


### ⚠ BREAKING CHANGES

* **selectors:** * feat(ffi-callback): support `ffi.Callback` params
* **type-decl:** * feat(underlying-type): Use UnderlyingType
* **allow-symbols:** `allow` flag moved to `allow-file`

### Features

* **allow-symbols:** Better symbol selection ([#14](https://github.com/RainwayApp/node-clangffi/issues/14)) ([5e3fcbb](https://github.com/RainwayApp/node-clangffi/commit/5e3fcbb2dd2eeac6e88c1bfb18f663f91719b699))
* **attributed-type:** support attributed fns ([#23](https://github.com/RainwayApp/node-clangffi/issues/23)) ([62b5c0c](https://github.com/RainwayApp/node-clangffi/commit/62b5c0cb48ee997609e3f31448aef08d8d7c999f))
* **engines:** Add engines field ([#3](https://github.com/RainwayApp/node-clangffi/issues/3)) ([2c5b4a8](https://github.com/RainwayApp/node-clangffi/commit/2c5b4a80c0a728fcc4743aefc8537f07d5b07af1)), closes [#2](https://github.com/RainwayApp/node-clangffi/issues/2)
* **init:** Initial commit ([e74d425](https://github.com/RainwayApp/node-clangffi/commit/e74d425651050241d6460a7e35348ebd2f8932df))
* **selectors:** Refactor to use selectors ([#33](https://github.com/RainwayApp/node-clangffi/issues/33)) ([0801a4a](https://github.com/RainwayApp/node-clangffi/commit/0801a4a500e55af49ab68697ab7e81bb93df86a0))
* **type-decl:** Use UnderlyingType for `*Type` decls ([#31](https://github.com/RainwayApp/node-clangffi/issues/31)) ([0f5c539](https://github.com/RainwayApp/node-clangffi/commit/0f5c5398023d168c55628c813bbe76a78a1c52bf))


### Bug Fixes

* **bool:** Add `_Bool` c99 primitive ([#20](https://github.com/RainwayApp/node-clangffi/issues/20)) ([fd2360b](https://github.com/RainwayApp/node-clangffi/commit/fd2360ba4f6cae14920a0cd3225df53e1c877cf8)), closes [#19](https://github.com/RainwayApp/node-clangffi/issues/19)
* **cd:** Add back command ([4a48599](https://github.com/RainwayApp/node-clangffi/commit/4a4859912656b5bebdca4b0817fa83f8aaecd8e6))
* **cd:** Force release-as 1.0.0 ([e909137](https://github.com/RainwayApp/node-clangffi/commit/e90913745c02aadbc9b84fcbc04889d615d84450))
* **cd:** skip gh release for root ([94dca5b](https://github.com/RainwayApp/node-clangffi/commit/94dca5b204cdcc096ae29ff1f3b82a067ebeaeaf))
* **cd:** Use `draft` for root package ([f52e791](https://github.com/RainwayApp/node-clangffi/commit/f52e79156d317788972ded83d3d7dd8dbd7b3f2c))
* **libclang:** Update bindings ([#15](https://github.com/RainwayApp/node-clangffi/issues/15)) ([c1067f8](https://github.com/RainwayApp/node-clangffi/commit/c1067f84f232a3cae0e6357ec1469009a0d7fb4d))
* **logging:** Improve clangffi logging ([28b1de4](https://github.com/RainwayApp/node-clangffi/commit/28b1de410d9fa799fa6c4894bc355bb947ddd276))
* **matcher:** Move matcher to dep from dev-dep ([#44](https://github.com/RainwayApp/node-clangffi/issues/44)) ([520ab38](https://github.com/RainwayApp/node-clangffi/commit/520ab386e9eed4c85273ffd8289b1d0b7d992713))
* **primitives:** Better primitive support ([#13](https://github.com/RainwayApp/node-clangffi/issues/13)) ([4284a6f](https://github.com/RainwayApp/node-clangffi/commit/4284a6fa8db4d0b5c368a6c45ef4b030a7b8bdd7)), closes [#4](https://github.com/RainwayApp/node-clangffi/issues/4)
* **release-please:** remove release-as directive ([b6a5f55](https://github.com/RainwayApp/node-clangffi/commit/b6a5f553b7d726a4ead14ac69463b6cca75e47d9))
* **void-fn:** Handle void fn params ([#21](https://github.com/RainwayApp/node-clangffi/issues/21)) ([3f20c4a](https://github.com/RainwayApp/node-clangffi/commit/3f20c4adbac294457015dc3bff280ffce990d5d9)), closes [#16](https://github.com/RainwayApp/node-clangffi/issues/16)

## [1.0.0](https://github.com/RainwayApp/node-clangffi/compare/node-clangffi-lerna-workspace-v1.0.0...node-clangffi-lerna-workspace-v1.0.0) (2022-01-08)


### ⚠ BREAKING CHANGES

* **selectors:** * feat(ffi-callback): support `ffi.Callback` params
* **type-decl:** * feat(underlying-type): Use UnderlyingType

### Features

* **selectors:** Refactor to use selectors ([#33](https://github.com/RainwayApp/node-clangffi/issues/33)) ([0801a4a](https://github.com/RainwayApp/node-clangffi/commit/0801a4a500e55af49ab68697ab7e81bb93df86a0))
* **type-decl:** Use UnderlyingType for `*Type` decls ([#31](https://github.com/RainwayApp/node-clangffi/issues/31)) ([0f5c539](https://github.com/RainwayApp/node-clangffi/commit/0f5c5398023d168c55628c813bbe76a78a1c52bf))

## 1.0.0 (2022-01-05)


### ⚠ BREAKING CHANGES

* **allow-symbols:** `allow` flag moved to `allow-file`

### Features

* **allow-symbols:** Better symbol selection ([#14](https://github.com/RainwayApp/node-clangffi/issues/14)) ([5e3fcbb](https://github.com/RainwayApp/node-clangffi/commit/5e3fcbb2dd2eeac6e88c1bfb18f663f91719b699))
* **attributed-type:** support attributed fns ([#23](https://github.com/RainwayApp/node-clangffi/issues/23)) ([62b5c0c](https://github.com/RainwayApp/node-clangffi/commit/62b5c0cb48ee997609e3f31448aef08d8d7c999f))
* **engines:** Add engines field ([#3](https://github.com/RainwayApp/node-clangffi/issues/3)) ([2c5b4a8](https://github.com/RainwayApp/node-clangffi/commit/2c5b4a80c0a728fcc4743aefc8537f07d5b07af1)), closes [#2](https://github.com/RainwayApp/node-clangffi/issues/2)
* **init:** Initial commit ([e74d425](https://github.com/RainwayApp/node-clangffi/commit/e74d425651050241d6460a7e35348ebd2f8932df))


### Bug Fixes

* **bool:** Add `_Bool` c99 primitive ([#20](https://github.com/RainwayApp/node-clangffi/issues/20)) ([fd2360b](https://github.com/RainwayApp/node-clangffi/commit/fd2360ba4f6cae14920a0cd3225df53e1c877cf8)), closes [#19](https://github.com/RainwayApp/node-clangffi/issues/19)
* **cd:** Add back command ([4a48599](https://github.com/RainwayApp/node-clangffi/commit/4a4859912656b5bebdca4b0817fa83f8aaecd8e6))
* **cd:** Force release-as 1.0.0 ([e909137](https://github.com/RainwayApp/node-clangffi/commit/e90913745c02aadbc9b84fcbc04889d615d84450))
* **libclang:** Update bindings ([#15](https://github.com/RainwayApp/node-clangffi/issues/15)) ([c1067f8](https://github.com/RainwayApp/node-clangffi/commit/c1067f84f232a3cae0e6357ec1469009a0d7fb4d))
* **logging:** Improve clangffi logging ([28b1de4](https://github.com/RainwayApp/node-clangffi/commit/28b1de410d9fa799fa6c4894bc355bb947ddd276))
* **primitives:** Better primitive support ([#13](https://github.com/RainwayApp/node-clangffi/issues/13)) ([4284a6f](https://github.com/RainwayApp/node-clangffi/commit/4284a6fa8db4d0b5c368a6c45ef4b030a7b8bdd7)), closes [#4](https://github.com/RainwayApp/node-clangffi/issues/4)
* **release-please:** remove release-as directive ([b6a5f55](https://github.com/RainwayApp/node-clangffi/commit/b6a5f553b7d726a4ead14ac69463b6cca75e47d9))
* **void-fn:** Handle void fn params ([#21](https://github.com/RainwayApp/node-clangffi/issues/21)) ([3f20c4a](https://github.com/RainwayApp/node-clangffi/commit/3f20c4adbac294457015dc3bff280ffce990d5d9)), closes [#16](https://github.com/RainwayApp/node-clangffi/issues/16)
