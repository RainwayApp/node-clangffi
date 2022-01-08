import { parse, format, SelectorData, matches } from "./selector";

describe("Selector", () => {
  const strictExamples: { [str: string]: SelectorData } = {
    "*time*_t": {
      symbolName: "*time*_t",
      children: [],
    },
    "*Fn": {
      symbolName: "*Fn",
      children: [],
    },
    "Fn1:{param1, param2}": {
      symbolName: "Fn1",
      children: [
        {
          symbolName: "param1",
          children: [],
        },
        {
          symbolName: "param2",
          children: [],
        },
      ],
    },
    "Type1:{param*}": {
      symbolName: "Type1",
      children: [
        {
          symbolName: "param*",
          children: [],
        },
      ],
    },
  };
  const nonStrictExamples: { [str: string]: SelectorData } = {
    "Fn1:param1": {
      symbolName: "Fn1",
      children: [
        {
          symbolName: "param1",
          children: [],
        },
      ],
    },

    "*Fn:param1": {
      symbolName: "*Fn",
      children: [
        {
          symbolName: "param1",
          children: [],
        },
      ],
    },
  };

  it("should format using custom separator", () => {
    expect(matches("MyType|MyParam", "MyType:MyParam", "|")).toBe(true);
  });

  it("should parse example selectors", () => {
    Object.entries(strictExamples).forEach(([str, data]) => {
      const parsed = parse(str);
      expect(parsed).toEqual(data);
      expect(format(parsed, true)).toEqual(str);
    });

    Object.entries(nonStrictExamples).forEach(([str, data]) => {
      const parsed = parse(str);
      expect(parsed).toEqual(data);
      expect(format(parsed, false)).toEqual(str);
      expect(format(parsed, true)).not.toEqual(str);
    });
  });

  it("should fail to parse empty string", () => {
    expect(() => {
      parse("");
    }).toThrowError(/length/);
  });

  it("should fail to parse invalid selector", () => {
    expect(() => {
      parse("Fn1:param1, Fn2:param2");
    }).toThrowError(/selector/);

    expect(() => {
      parse("Fn1:{param1");
    }).toThrowError(/selector/);

    expect(() => {
      parse("Fn1:param1, param2");
    }).toThrowError(/selector/);

    expect(() => {
      parse("Fn1:param1}");
    }).toThrowError(/selector/);
  });

  describe("matches", () => {
    it("should match simple wildcards", () => {
      expect(matches("AFn:SuccessCb", "*Fn:{SuccessCb, FailureCb}")).toBe(true);
      expect(matches("BFn:FailureCb", "*Fn:{SuccessCb, FailureCb}")).toBe(true);
      expect(matches("CFn:SuccessCb", "*Fn:*Cb")).toBe(true);

      expect(matches("DFn:Success", "*Fn:*Cb")).toBe(false);
    });

    it("should fail to parse invalid selector strings", () => {
      expect(() => {
        matches("no", "Bad:Sel}");
      }).toThrowError(/selector/);
    });

    it("should match complex types", () => {
      expect(matches("DataStruct:ParamName", "D*Struct:P*N*")).toBe(true);
    });

    it("should match numbered params", () => {
      expect(matches("MyFunc:0", "My*:0")).toBe(true);
    });
  });
});
