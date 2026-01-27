function printSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let arrayNumbers = Number(array[i]);
    if (arrayNumbers % 2 === 0) {
      sum += arrayNumbers;
    }
  }
  console.log(sum);
}
printSum(["1", "2", "3", "4", "5", "6"]);
