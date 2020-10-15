import leaderBoardClimbers from "./leaderboardClimbers";

describe("correct format", () => {
  let players;
  beforeEach(() => {
    players = ["John", "Brian", "Jim", "Dave", "Fred"];
  });
  it("checks with one change", () => {
    const result = leaderBoardClimbers(players, ["Brian +1"]);
    expect(result).toEqual(["Brian", "John", "Jim", "Dave", "Fred"]);
  });
  it("checks with multiple changes ", () => {
    const result = leaderBoardClimbers(players, [
      "Dave +1",
      "Fred +4",
      "Brian -1",
    ]);
    expect(result).toEqual(["Fred", "John", "Dave", "Brian", "Jim"]);
  });
  it.skip("checks kata error", () => {
    const result = leaderBoardClimbers(
      [
        "BC",
        "aP",
        "mr",
        "IY",
        "Xz",
        "dV",
        "fH",
        "nU",
        "qB",
        "zx",
        "Lw",
        "aV",
        "fY",
        "WJ",
        "ff",
      ],
      [
        "qB -6",
        "aP -7",
        "Xz -9",
        "zx +4",
        "nU +0",
        "Lw +8",
        "BC +0",
        "aP +2",
        "Xz +6",
        "zx -8",
        "IY -7",
        "Xz -8",
        "BC -8",
        "ff +10",
        "BC +5",
      ],
    );
    expect(result).toEqual([
      "MrVxRg",
      "yCbHPg",
      "pAMQTg",
      "KKVGyS",
      "gcSLSP",
      "sPXleL",
      "NgCWwo",
      "tQzamy",
      "XYJXxi",
      "MrTGEX",
      "cbaKxR",
      "lPJyVO",
      "vbFidn",
      "qlbTlZ",
    ]);
  });
});
