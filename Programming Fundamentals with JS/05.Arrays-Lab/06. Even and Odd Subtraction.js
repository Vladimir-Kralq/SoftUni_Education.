function printEvenOrOdd(array) {
  let evenDum = 0;
  let oddSum = 0;

  for (let number of array) {
    if (number % 2 == 0) {
      evenDum += number;
    } else {
      oddSum += number;
    }
  }

  console.log(evenDum - oddSum);
}
printEvenOrOdd([1, 2, 3, 4, 5, 6]);
