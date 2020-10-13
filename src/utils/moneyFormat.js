function moneyFormat(number) {
  return "$" + number.toFixed(2).toLocaleString("en-US");
}

module.exports = moneyFormat;
