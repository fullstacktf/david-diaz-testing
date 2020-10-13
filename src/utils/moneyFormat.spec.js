const moneyFormat = require("./moneyFormat");

/*const firstResult = moneyFormat(19.99);
const secondResult = moneyFormat(250);
const thirdResult = moneyFormat(9500.95);

assertEquals(firstResult, "$19.99");
assertEquals(secondResult, "$250.00");
assertEquals(thirdResult, "$9500.95");

function assertEquals(result, expectedResult) {
  if (result !== expectedResult) {
    throw new Error(
      "First test failed: Expected " + expectedResult + ", got " + result,
    );
  }
}
console.log("All ok");*/

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
