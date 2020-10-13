import leaderBoardClimbers from "./leaderboardClimbers";

describe("correct format", () => {
  it("checks if the format is correct", () => {
    const result = leaderBoardClimbers(
      ["John", "Brian", "Jim", "Dave", "Fred"],
      ["Dave +1", "Fred +4", "Brian -1"],
    );
    expect(result).toEqual(["Fred", "Dave", "Brian", "Jim", "John"]);
  });
});
