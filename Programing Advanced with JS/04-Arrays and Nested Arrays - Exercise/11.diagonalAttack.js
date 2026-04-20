function diagonalAttack(arr) {
  let matrix = arr.map((row) => row.split(" ").map(Number));
  let n = matrix.length;

  let mainDiagSum = 0;
  for (let i = 0; i < n; i++) {
    mainDiagSum += matrix[i][i];
  }

  let secDiagSum = 0;
  for (let i = 0; i < n; i++) {
    secDiagSum += matrix[i][n - 1 - i];
  }

  if (mainDiagSum !== secDiagSum) {
    for (let row of matrix) {
      console.log(row.join(" "));
    }
    return;
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      let onMainDiag = row === col;
      let onSecDiag = row + col === n - 1;

      if (!onMainDiag && !onSecDiag) {
        matrix[row][col] = mainDiagSum;
      }
    }
  }

  for (let row of matrix) {
    console.log(row.join(" "));
  }
}
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "1 1 1 1 1",
]);
