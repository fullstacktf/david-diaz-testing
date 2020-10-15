import fs from "fs";

export class TextFileReader {
  read() {
    const text = fs.readFileSync("./text.txt", "utf-8");
    return text;
  }
}
