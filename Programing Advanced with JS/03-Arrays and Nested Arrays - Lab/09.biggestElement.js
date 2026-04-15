function findBiggestElement(matrix) {
  let biggest = matrix[0][0];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > biggest) {
        biggest = matrix[row][col];
      }
    }
  }

  return biggest;
}

console.log(
  findBiggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ]),
); // 145
