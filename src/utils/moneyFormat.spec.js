const moneyFormat = require("./moneyFormat");

const firstResult = moneyFormat(19.99);
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
console.log("All ok");
