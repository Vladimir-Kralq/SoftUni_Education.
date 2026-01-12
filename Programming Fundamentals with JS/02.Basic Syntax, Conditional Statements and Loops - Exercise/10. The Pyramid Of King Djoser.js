function printPyramidOfKingDjoser(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let steps = 0;

  while (base > 2) {
    steps++;
    let totalArea = base * base;
    let innerSide = base - 2;
    let innerArea = innerSide * innerSide;
    let outerArea = totalArea - innerArea;

    stone += innerArea * increment;

    if (steps % 5 === 0) {
      lapis += outerArea * increment;
    } else {
      marble += outerArea * increment;
    }

    base -= 2;
  }

  steps++;
  gold = base * base * increment;

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}
printPyramidOfKingDjoser(11, 1);
