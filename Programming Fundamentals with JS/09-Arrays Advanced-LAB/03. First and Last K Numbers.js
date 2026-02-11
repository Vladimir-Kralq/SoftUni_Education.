function printFirstAndLastKNumbers(input) {
  let k = input[0];
  input = input.slice(1);

  let firstKNumbers = input.slice(0, k);
  let lastKNumbers = input.slice(input.length - k);

  console.log(firstKNumbers.join(" "));
  console.log(lastKNumbers.join(" "));
}
printFirstAndLastKNumbers([2, 7, 8, 9]);
printFirstAndLastKNumbers([3, 6, 7, 8, 9]);
