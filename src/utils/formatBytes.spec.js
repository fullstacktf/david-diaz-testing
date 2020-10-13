const formatBytes = require("./formatBytes");

/*const value1 = formatBytes(900);
console.log(value1); // 900MB
const value2 = formatBytes(1900);
console.log(value2); // 1TB 900MB
const value3 = formatBytes(568200);
console.log(value3); // 568GB 200MB
const value4 = formatBytes(1234567);
console.log(value4); // 1TB 234GB 567MB

assertEquals(formatBytes(900), "900MB");
assertEquals(formatBytes(1900), "1GB 900MB");
assertEquals(formatBytes(568200), "568GB 200MB");
assertEquals(formatBytes(12345678), "12TB 345GB 678MB");

function assertEquals(result, expectedResult) {
  if (result !== expectedResult) {
    throw new Error(
      "First test failed: Expected " + expectedResult + ", got " + result,
    );
  }
}
console.log("All ok");
*/

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
