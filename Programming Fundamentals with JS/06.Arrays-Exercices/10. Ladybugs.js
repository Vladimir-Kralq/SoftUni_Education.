function ladybugs(input) {
  let fieldSize = Number(input[0]);
  let ladybugIndexes = input[1].split(" ").map(Number);

  let field = new Array(fieldSize).fill(0);
  for (let index of ladybugIndexes) {
    if (index >= 0 && index < fieldSize) {
      field[index] = 1;
    }
  }

  for (let i = 2; i < input.length; i++) {
    let [currentIndex, direction, flyLength] = input[i].split(" ");
    currentIndex = Number(currentIndex);
    flyLength = Number(flyLength);

    if (
      currentIndex < 0 ||
      currentIndex >= fieldSize ||
      field[currentIndex] !== 1
    ) {
      continue;
    }

    field[currentIndex] = 0;
    let nextIndex = currentIndex;

    if (direction === "left") {
      flyLength = -flyLength;
    }

    while (true) {
      nextIndex += flyLength;

      if (nextIndex < 0 || nextIndex >= fieldSize) {
        break;
      }

      if (field[nextIndex] === 0) {
        field[nextIndex] = 1;
        break;
      }
    }
  }

  console.log(field.join(" "));
}
