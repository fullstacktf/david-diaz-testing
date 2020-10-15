import { BannedWordsListFileReader } from "./BannedWordsListFileReader";

export class BannedWordsListFileReaderFake extends BannedWordsListFileReader {
  constructor(bannedWords) {
    super();
    this.bannedWords = bannedWords;
  }
  read() {
    return this.bannedWords;
  }
}
