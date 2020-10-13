import formatBytes from "./formatBytes";

describe("formatBytes", () => {
  it("formats in MBs", () => {
    const result = formatBytes(900);
    expect(result).toEqual("900MB");
  });
  it("formats in GBs without other values", () => {
    const result = formatBytes(1000);
    expect(result).toEqual("1GB 0MB");
  });
  it("formats in GBs with other values", () => {
    const result = formatBytes(1900);
    expect(result).toEqual("1GB 900MB");
  });
  it("formats in TBs without other values", () => {
    const result = formatBytes(12000000);
    expect(result).toEqual("12TB 0GB 0MB");
  });
  it("formats in TBs with other values", () => {
    const result = formatBytes(12100100);
    expect(result).toEqual("12TB 100GB 100MB");
  });
});
