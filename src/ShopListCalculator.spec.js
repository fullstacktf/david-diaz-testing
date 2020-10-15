import { ShopListParser } from "./io-utils/ShopListParser";
import { ShopListCalculator } from "./ShopListCalculator";
import { ShopListReaderFake } from "./io-utils/ShopListReaderFake";
import { ShopListWriterFake } from "./io-utils/ShopListWriterFake";

describe("ShopListCalculator", () => {
  it("returns the correct value", () => {
    const shopList = `bread, 1, 2
    12-pack of eggs, 1, 2
    milk (1L), 4, 8`;

    const shopListReader = new ShopListReaderFake(shopList);
    const shopListParser = new ShopListParser();
    const shopListWriter = new ShopListWriterFake();

    const shopListCalculator = new ShopListCalculator(
      shopListReader,
      shopListParser,
      shopListWriter,
    );
    shopListCalculator.calculate();
    expect(shopListWriter.totalPrice).toBe(36);
  });
});
