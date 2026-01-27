function printSumArray(array) {
  let firstArray = array[0];
  let lastArray = array[array.length - 1];
  let sum = firstArray + lastArray;

  console.log(sum);
}
printSumArray([20, 30, 40]);
