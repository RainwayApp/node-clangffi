import { Language, loadLibClang } from "libclang-bindings";
import { Parser } from "../lib/parser";
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
        remap: [
          // HACK: Remap enums to "int", because they might platform-dependently
          // be either "uint" or "int", but we don't want this to screw up the
          // test.
          {
            selector: { symbolName: "RainwayInput_Tag", children: [] },
            replacement: "int",
          },
        ],
        hardRemap: [],
      },
      cleanEnumConstants: false,
    }),
  });
  p.parseAndGenerate();
  expect(wfs).toHaveBeenCalled();
  const output = wfs.mock.calls[0][1] as string;
  expect(output.trim()).toMatchSnapshot(name);
}

describe("clangffi", () => {
  loadLibClang(process.env["LIBCLANG_LIB_PATH"] ?? libClangPath);
  const files = ["union"];
  for (const file of files) {
    test("tsgen:" + file, () => {
      runTsGenFileTest(file);
    });
  }
});
