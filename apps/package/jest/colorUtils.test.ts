import { shadeColor, hexToRgba, getLuminance } from "../../package/src/functions/colorUtils";

describe("colorUtils", () => {
  it("shades color lighter/darker correctly", () => {
    expect(shadeColor("#000000", 30)).not.toBe("#000000ff");
    expect(shadeColor("#ffffff", -30)).not.toBe("#ffffffff");
  });

  it("converts hex to rgba correctly", () => {
    expect(hexToRgba("#ffffff", 0.5)).toBe("rgba(255, 255, 255, 0.5)");
    expect(hexToRgba("#abc", 0.2)).toBe("rgba(170, 187, 204, 0.2)");
  });

  it("computes luminance correctly", () => {
    expect(getLuminance("#000000")).toBeCloseTo(0, 5);
    expect(getLuminance("#ffffff")).toBeCloseTo(1, 5);
    expect(getLuminance("#888888")).toBeGreaterThan(0.1);
    expect(getLuminance("#888888")).toBeLessThan(0.9);
  });
});
