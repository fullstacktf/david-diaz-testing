import { Censorer } from "./Censorer";
import { CensoredTextWriterFake } from "./io-utils/CensoredTextWriterFake";
import { TextFileReaderFake } from "./io-utils/TextFileReaderFake";
import { BannedWordsListFileReaderFake } from "./io-utils/BannedWordsListFileReaderFake";

describe("Censorer", () => {
  it("censors two words", () => {
    const originalText = "You're a nice person and very good";
    const bannedWords = ["nice"];
    const textFileReader = new TextFileReaderFake(originalText);
    const bannedWordsListFileReader = new BannedWordsListFileReaderFake(
      bannedWords,
    );
    const censoredTextWriter = new CensoredTextWriterFake();

    const censorer = new Censorer(
      textFileReader,
      bannedWordsListFileReader,
      censoredTextWriter,
    );
    censorer.censor();

    expect(censoredTextWriter.censoredText).toEqual(
      "You're a XXXX person and very good",
    );
  });
});
