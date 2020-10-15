import { Product } from "./Product";

export class ShopListParser {
  constructor() {}

  parse(text) {
    text = text.split("\n");
    let products = [];

    text.forEach((row) => {
      let product = row.split(",");
      product = new Product(product[0], product[1], product[2]);
      products.push(product);
    });

    return products;
  }
}
