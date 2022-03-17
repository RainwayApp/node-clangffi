#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import fs from "node:fs";
import path from "node:path";
import { Language, loadLibClang } from "libclang-bindings";
import { Parser } from "../lib/index";
import { TsGen } from "../lib/tsgen/index";
import { LineEndings } from "../lib/types";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import debug from "debug";
import { parse } from "../lib/selector";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const log = debug("clangffi");
const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../package.json")).toString()
);

const args = yargs(hideBin(process.argv))
  .version(pkg.version)
  .wrap(yargs([""]).terminalWidth())
  .scriptName("clangffi")
  .epilog(
    "Generate typescript ffi-napi bindings for any c/c++ library using libclang."
  )
  .options({
    i: {
      type: "string",
      alias: "input",
      describe: "Path to the header from which we will generate bindings.",
      demandOption: true,
    },
    o: {
      type: "string",
      alias: "output",
      describe:
        "Path to the output typescript file into which we will write the generated bindings.",
      demandOption: true,
    },
    L: {
      type: "string",
      alias: "language",
      choices: ["c", "cpp"],
      describe: "The language libclang should parse the input as.",
      default: "c",
      coerce: (arg) => {
        return arg as Language;
      },
    },
    I: {
      type: "array",
      string: true,
      alias: "include-directory",
      describe: "Additional include directories to use during parsing.",
      default: [] as string[],
    },
    D: {
      type: "array",
      string: true,
      alias: "define",
      describe: "Preprocessor definitions to use during parsing.",
      default: [] as string[],
    },
    R: {
      type: "array",
      string: true,
      alias: "remap",
      describe: "Custom native symbol mappings that override the default.",
      default: [] as string[],
    },
    crlf: {
      type: "boolean",
      describe: "Use `crlf` line endings instead of `lf`.",
      default: false,
    },
    prettier: {
      type: "boolean",
      describe: "Run `prettier` against the bindings before output.",
      default: true,
    },
    "lib-path": {
      type: "string",
      describe:
        "Specifies an absolute path to `libclang` which will be used instead of searching `PATH`.",
    },
    "default-symbols": {
      type: "boolean",
      describe:
        "Automatically include symbols in the `input` file in the bindings.",
      default: true,
    },
    include: {
      type: "array",
      string: true,
      describe: "Symbols to explicitly include in the bindings.",
      default: [] as string[],
    },
    "include-file": {
      type: "array",
      string: true,
      describe:
        "File paths to explicitly include symbols from, in addition to the default. If a directory path is given symbols from all files in that directory will be included.",
      default: [] as string[],
    },
    exclude: {
      type: "array",
      string: true,
      describe:
        "Symbols to explicitly exclude from the bindings. Overrides `include` if there is a conflict.",
      default: [] as string[],
    },
    "hard-remap": {
      type: "array",
      string: true,
      alias: "remap",
      describe:
        "Custom native to node symbol mappings that override the default.",
      default: [] as string[],
    },
    "clean-enum-constants": {
      type: "boolean",
      describe:
        "Convert constant names like `ENUM_NAME_FOO_BAR` to `FooBar` in enums.",
      default: true,
    },
  })
  .example([
    [
      "$0 --input path/to/header.h --output path/to/output.ts",
      "Generate bindings with `libclang` in `PATH`.",
    ],
    [
      "$0 --lib-path path/to/libclang --input path/to/header.h --output path/to/output.ts",
      "Generate bindings with a custom `libclang` path.",
    ],
    [
      "$0 --input path/to/header.h --output path/to/output.ts --include *Cb",
      "Generate bindings, including all symbols with names ending in `Cb`.",
    ],
    [
      "$0 --input path/to/header.h --output path/to/output.ts --remap 'time_t=long long'",
      "Generate bindings, remapping symbol `time_t` to native type `long long`.",
    ],
    [
      "$0 --input path/to/header.h --output path/to/output.ts --hard-remap 'time_t=ref.types.longlong'",
      "Generate bindings, hard remapping symbol `time_t` to node type `ref.types.longlong`.",
    ],
  ])
  .check((argv) => {
    // ensure input is good
    if (!fs.existsSync(argv.i)) {
      throw new Error(`Unable to find input file: '${argv.i}'.`);
    }

    // check the include dirs exist
    argv.I.forEach((includeDir) => {
      if (!fs.existsSync(includeDir)) {
        throw new Error(`Cannot find include-directory '${includeDir}'.`);
      }
    });

    // check the include-files exist
    argv["include-file"].forEach((file) => {
      if (!fs.existsSync(file)) {
        throw new Error(`Cannot find include-file '${file}'.`);
      }
    });

    // ensure the remap values are good
    argv.R.forEach((remap) => {
      const [key, val, ...remainder] = remap.split("=");
      if (
        !key ||
        key.length == 0 ||
        !val ||
        val.length == 0 ||
        remainder.length > 0
      ) {
        throw new Error(
          `Cannot parse remap '${remap}'. Should use the format 'key=value'. E.g. "time_t='long long'".`
        );
      }

      try {
        parse(key);
      } catch (e) {
        const msg = e instanceof Error ? e.message : JSON.stringify(e);
        throw new Error(`Cannot parse key from remap '${remap}': ${msg}`);
      }
    });

    // ensure the hard-remap values are good
    argv["hard-remap"].forEach((remap) => {
      const [key, val, ...remainder] = remap.split("=");
      if (
        !key ||
        key.length == 0 ||
        !val ||
        val.length == 0 ||
        remainder.length > 0
      ) {
        throw new Error(
          `Cannot parse hard-remap '${remap}'. Should use the format 'key=value'. E.g. "time_t=ref.types.longlong".`
        );
      }

      try {
        parse(key);
      } catch (e) {
        const msg = e instanceof Error ? e.message : JSON.stringify(e);
        throw new Error(`Cannot parse key from hard-remap '${remap}': ${msg}`);
      }
    });

    // ensure the include values can be parsed
    argv.include.forEach((include) => {
      try {
        parse(include);
      } catch (e) {
        const msg = e instanceof Error ? e.message : JSON.stringify(e);
        throw new Error(`Cannot parse value from include '${include}'. ${msg}`);
      }
    });

    // ensure the exclude values can be parsed
    argv.exclude.forEach((exclude) => {
      try {
        parse(exclude);
      } catch (e) {
        const msg = e instanceof Error ? e.message : JSON.stringify(e);
        throw new Error(`Cannot parse value from exclude '${exclude}': ${msg}`);
      }
    });

    // if we get here, no issues were detected
    return true;
  })
  .help().argv;

if (!(args instanceof Promise)) {
  log(JSON.stringify(args, null, 2));

  const defaultLibPath =
    process.platform == "win32" ? "libclang.dll" : "libclang";

  // load libclang
  loadLibClang(args.libPath ?? defaultLibPath);

  // create a parser and run it
  new Parser({
    path: args.i,
    outputPath: args.o,
    language: args.L,
    includeDirectories: args.I,
    preprocessorDefinitions: args.D,
    symbols: {
      default: args.defaultSymbols,
      files: args.includeFile,
      include: args.include.map((sel) => parse(sel)),
      exclude: args.exclude.map((sel) => parse(sel)),
    },
    generator: new TsGen({
      lineEndings: args.crlf ? LineEndings.CRLF : LineEndings.LF,
      usePrettier: args.prettier,
      symbols: {
        remap: args.R.map((kv) => {
          const [key, val] = kv.split("=");
          return { selector: parse(key), replacement: val };
        }),
        hardRemap: args.hardRemap.map((kv) => {
          const [key, val] = kv.split("=");
          return { selector: parse(key), replacement: val };
        }),
      },
      cleanEnumConstants: args.cleanEnumConstants,
    }),
  }).parseAndGenerate();
} else {
  // this shouldn't be possible, since the Promise check is just a typings "issue"
  throw new Error("Failed to parse arguments");
}
