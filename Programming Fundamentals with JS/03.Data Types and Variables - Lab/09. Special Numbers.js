function printSpecialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let numberString = String(i);
    let sum = 0;

    for (let j = 0; j < numberString.length; j++) {
      sum += Number(numberString[j]);
    }

    let isSpecial = sum === 5 || sum === 7 || sum === 11;

    console.log(`${i} -> ${isSpecial ? "True" : "False"}`);
  }
}

printSpecialNumbers(15);
