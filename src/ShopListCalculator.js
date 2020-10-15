export class ShopListCalculator {
  constructor(shopListReader, shopListParser, shopListResultWriter) {
    this.shopListReader = shopListReader;
    this.shopListParser = shopListParser;
    this.shopListResultWriter = shopListResultWriter;
  }

  calculate() {
    const productsList = this.shopListReader.read();
    const products = this.shopListParser.parse(productsList);

    let totalPrice = products.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.calculatePrice();
    }, 0);

    this.shopListResultWriter.write(totalPrice);
  }
}
