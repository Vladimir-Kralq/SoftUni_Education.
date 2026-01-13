function printIntegerAndFloat(number1, number2, number3) {
  let totalSum = number1 + number2 + number3;
  if (totalSum % 1 === 0) {
    console.log(`${totalSum} - Integer`);
  } else {
    console.log(`${totalSum} - Float`);
  }
}
printIntegerAndFloat(9, 100, 1.1);
