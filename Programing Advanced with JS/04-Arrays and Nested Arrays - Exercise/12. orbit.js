function solve([width, height, x, y]) {
  let matrix = [];

  for (let row = 0; row < height; row++) {
    let currentRow = [];
    for (let col = 0; col < width; col++) {
      let value = Math.max(Math.abs(row - y), Math.abs(col - x)) + 1;
      currentRow.push(value);
    }

    matrix.push(currentRow);
  }

  matrix.forEach((row) => console.log(row.join(" ")));
}


solve([4, 4, 0, 0]);
