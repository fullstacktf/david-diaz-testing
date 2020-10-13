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
});
