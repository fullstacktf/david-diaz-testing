import { ShopListWriter } from "./ShopListWriter";

export class ShopListWriterFake extends ShopListWriter {
  write(totalPrice) {
    this.totalPrice = totalPrice;
  }
}
