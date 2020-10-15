const fs = require("fs");

export class ShopListReader {
  constructor(path) {
    this.path = path;
  }
  read() {
    const shopList = fs.readFileSync(this.path, "utf-8");
    return shopList;
  }
}
