import fs from "fs";

export class BannedWordsListFileReader {
  read() {
    const bannedWordsFile = fs.readFileSync("./banned-words.txt", "utf-8");
    const bannedWords = bannedWordsFile.trim().split("\n");
    return bannedWords;
  }
}
