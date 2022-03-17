import { Language, loadLibClang } from "libclang-bindings";
import { Parser } from "../lib";
import { TsGen } from "../lib/tsgen";
import { LineEndings } from "../lib/types";
import fs from "node:fs";

const libClangPath = process.platform == "win32" ? "libclang.dll" : "libclang";

/// Expect TsGen for `tests/$name.h` to equal `tests/$name.ts`.
function runTsGenFileTest(name: string) {
  const wfs = jest.spyOn(fs, "writeFileSync").mockImplementation(() => {});

  const p = new Parser({
    path: `tests/${name}.h`,
    outputPath: "",
    language: Language.C,
    includeDirectories: [],
    preprocessorDefinitions: [],
    symbols: {
      default: true,
      files: [],
      include: [],
      exclude: [],
    },
    generator: new TsGen({
      lineEndings: LineEndings.LF,
      usePrettier: true,
      symbols: {
        remap: [],
        hardRemap: [],
      },
      cleanEnumConstants: false,
    }),
  });
  p.parseAndGenerate();
  expect(wfs).toHaveBeenCalled();
  const output = wfs.mock.calls[0][1] as string;
  expect(output.trim()).toEqual(
    fs
      .readFileSync(`tests/${name}.ts`)
      .toString()
      .trim()
      .replace(/[\r\n]+/g, "\n")
  );
}

describe("clangffi", () => {
  loadLibClang(libClangPath);
  const files = ["union"];
  for (const file of files) {
    test("tsgen:" + file, () => {
      runTsGenFileTest(file);
    });
  }
});
