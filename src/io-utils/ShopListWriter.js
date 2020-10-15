const fs = require("fs");

export class ShopListWriter {
  constructor(path) {
    this.path = path;
  }
  write(output) {
    fs.writeFileSync(this.path, output.toString());
  }
}
