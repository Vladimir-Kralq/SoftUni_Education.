function processOddPositions(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) {
      numbers[i] *= 2;
      result.push(numbers[i]);
    }
  }
  return result.reverse().join(" ");
}

console.log(processOddPositions([10, 15, 20, 25]));
