import { ShopListReader } from "./ShopListReader";

export class ShopListReaderFake extends ShopListReader {
  constructor(shopList) {
    super();
    this.shopList = shopList;
  }
  read() {
    return this.shopList;
  }
}
