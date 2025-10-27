function sumNums(numberAsText) {
  let sum = 0;

  for (let i = 0; i < numberAsText.length; i++) {
    let currentChar = numberAsText[i];
    let charAsNumber = Number(currentChar);
    sum += charAsNumber;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumNums("1234");
