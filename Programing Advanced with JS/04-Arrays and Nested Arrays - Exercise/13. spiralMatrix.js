function generateSpiralMatrix(rows, cols) {
  let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

  let counter = 1;
  let startCol = 0;
  let endCol = cols - 1;
  let startRow = 0;
  let endRow = rows - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // 1. От ляво надясно (по горния ред)
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter++;
    }
    startCol++;
  }

  matrix.forEach((row) => console.log(row.join(" ")));
}


generateSpiralMatrix(5, 5);
