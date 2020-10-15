// TODO!

import { Censorer } from "./Censorer";
import { CensoredTextWriter } from "./io-utils/CensoredTextWriter";
import { TextFileReader } from "./io-utils/TextFileReader";
import { BannedWordsListFileReader } from "./io-utils/BannedWordsListFileReader";

const textFileReader = new TextFileReader();
const bannedWordsListFileReader = new BannedWordsListFileReader();
const censoredTextWriter = new CensoredTextWriter();

const censorer = new Censorer(
  textFileReader,
  bannedWordsListFileReader,
  censoredTextWriter,
);

censorer.censor();
