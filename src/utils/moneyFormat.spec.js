import moneyFormat from "./moneyFormat";

describe("moneyFormat", () => {
  it("Works with two decimals", () => {
    const result = moneyFormat(99.99);
    expect(result).toEqual("$99.99");
  });
  it("Works with bigger numbers", () => {
    const result = moneyFormat(9500.95);
    expect(result).toEqual("$9500.95");
  });
  it("Works with numbers without decimals", () => {
    const result = moneyFormat(250);
    expect(result).toEqual("$250.00");
  });
});
