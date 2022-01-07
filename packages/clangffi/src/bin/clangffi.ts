#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { Language, loadLibClang } from "libclang-bindings";
import { Parser } from "../lib";
import { TsGen } from "../lib/tsgen/index";
import { FnParamCallbackSpec, LineEndings } from "../lib/types";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import debug from "debug";

const log = debug("clangffi");
const pkg = require(path.join(__dirname, "../../package.json"));

const args = yargs(hideBin(process.argv))
  .version(pkg.version)
  .scriptName("clangffi")
  .epilog(
    "Generate typescript ffi-napi bindings for any c/c++ library using libclang."
  )
  .boolean("crlf")
  .boolean("no-sibling")
  .boolean("no-prettier")
  .string("lib-path")
  .string("i")
  .alias("i", "input")
  .string("o")
  .alias("o", "output")
  .string("L")
  .alias("L", "language")
  .choices("L", ["c", "cpp"])
  .string("I")
  .array("I")
  .alias("I", "include-directory")
  .string("allow-file")
  .array("allow-file")
  .string("allow-symbol")
  .array("allow-symbol")
  .string("fn-param-cb")
  .array("fn-param-cb")
  .default({
    crlf: false,
    "no-prettier": false,
    "no-sibling": false,
    L: "c",
    I: [],
    "allow-file": [],
    "allow-symbol": [],
    "fn-param-cb": [],
  })
  .demandOption("input")
  .demandOption("output")
  .describe({
    i: "Input header path",
    o: "Output typescript file path",
    L: "Language to parse input as",
    I: "Additional include directories to use during parsing",
    "lib-path": "The path to the libclang binary to load.",
    "allow-file": "Additional file paths to allow symbols from",
    "allow-symbol":
      "Additional symbol name to allow regardless of it's location",
    crlf: "Use crlf endings instead of lf",
    "no-sibling":
      "Does not include sibling file symbols in the generated bindings",
    "no-prettier": "Does not run prettier on the generated binding output",
    "fn-param-cb":
      "Specifies parameter symbols to treat as callback function pointers. Uses the format 'fnName:paramIndex' - e.g. 'MyFunc:0'.",
  })
  .help().argv;

if (!(args instanceof Promise)) {
  log(JSON.stringify(args, null, 2));

  // process the arguments
  const fileDir = path.dirname(args.input);
  const lang: Language = args.language == "c" ? Language.C : Language.Cpp;
  const includeDirectories: string[] = args.includeDirectory ?? [];
  const additionalSymbols: string[] = args.allowSymbol ?? [];
  const fnParamArgs: string[] = args.fnParamCb ?? [];

  const includeFiles = includeDirectories.flatMap((includeDir) =>
    fs
      .readdirSync(includeDir)
      .map((f) => path.join(includeDir, f))
      .filter((f) => path.extname(f) == ".h")
  );

  const siblingFiles: string[] = args.noSibling
    ? []
    : fs
        .readdirSync(fileDir)
        .map((f) => path.join(fileDir, f))
        .filter((f) => path.extname(f) == ".h");

  const additionalFiles = siblingFiles
    .concat(includeFiles)
    .concat(args.allowFile ?? []);

  const fnParamCallbacks: FnParamCallbackSpec[] = fnParamArgs
    .map((f) => f.split(":"))
    .map((arr) => ({ fnName: arr[0], paramIndex: Number(arr[1]) }));

  const defaultLibPath =
    process.platform == "win32" ? "libclang.dll" : "libclang";

  // load libclang
  loadLibClang(args.libPath ?? defaultLibPath);

  // create a parser and run it
  new Parser({
    path: args.input,
    outputPath: args.output,
    language: lang,
    additionalFiles,
    includeDirectories,
    additionalSymbols,
    generator: new TsGen({
      lineEndings: args.crlf ? LineEndings.CRLF : LineEndings.LF,
      usePrettier: args["no-prettier"] ? false : true,
      fnParamCallbacks,
    }),
  }).parseAndGenerate();
} else {
  // this shouldn't be possible, since the Promise check is just a typings "issue"
  throw new Error("Failed to parse arguments");
}
