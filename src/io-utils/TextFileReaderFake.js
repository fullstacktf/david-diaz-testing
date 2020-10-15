import { TextFileReader } from "./TextFileReader";

export class TextFileReaderFake extends TextFileReader {
  constructor(text) {
    super();
    this.text = text;
  }
  read() {
    return this.text;
  }
}
