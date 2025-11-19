function barcodGenerator(startNum, endNum) {
  startNum = String(startNum);
  endNum = String(endNum);

  const startNum1 = Number(startNum[0]);
  const startNum2 = Number(startNum[1]);
  const startNum3 = Number(startNum[2]);
  const startNum4 = Number(startNum[3]);

  const endNum1 = Number(endNum[0]);
  const endNum2 = Number(endNum[1]);
  const endNum3 = Number(endNum[2]);
  const endNum4 = Number(endNum[3]);

  let result = "";

  for (let a = startNum1; a <= endNum1; a++) {
    for (let b = startNum2; b <= endNum2; b++) {
      for (let c = startNum3; c <= endNum3; c++) {
        for (let d = startNum4; d <= endNum4; d++) {
          if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
            result += "" + a + b + c + d + " ";
          }
        }
      }
    }
  }

  console.log(result.trim());
}
barcodGenerator(2345, 6789);
