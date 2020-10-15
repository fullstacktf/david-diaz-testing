import fs from "fs";

export class CensoredTextWriter {
  write(censoredText) {
    fs.writeFileSync("./text-censored.txt", censoredText);
  }
}
