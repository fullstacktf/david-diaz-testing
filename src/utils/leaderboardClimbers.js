/**
 *
 * @param {array} names
 * @param {array} newPositions
 */
const leaderBoardClimbers = (names, newPositions) => {
  let positions = [];
  newPositions.forEach((position) => {
    positions.push({
      name: position.split(" ")[0],
      position: position.split(" ")[1],
    });
  });
  moveElements(names, positions);
  return names;
};

const moveElements = (names, positions) => {
  for (let index = 0; index < positions.length; index++) {
    const element = positions[index];
    if (element.position.startsWith("+")) {
      const position =
        names.indexOf(element.name) - element.position.split("")[1];
      names.splice(names.indexOf(element.name), 1);
      names.splice(position, 0, element.name);
    } else if (element.position.startsWith("-")) {
      const position =
        parseInt(names.indexOf(element.name)) +
        parseInt(element.position.split("")[1]);
      names.splice(names.indexOf(element.name), 1);
      names.splice(position, 0, element.name);
    }
  }
};

module.exports = leaderBoardClimbers;
