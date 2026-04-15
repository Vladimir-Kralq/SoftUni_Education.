function equalNum(matrix) {
  let counter = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let current = matrix[row][col];

      if (col + 1 < matrix[row].length) {
        if (current === matrix[row][col + 1]) {
          counter++;
        }
      }

      if (row + 1 < matrix.length) {
        if (current === matrix[row + 1][col]) {
          counter++;
        }
      }
    }
  }

  return counter;
}
console.log(equalNum([['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']]
));
