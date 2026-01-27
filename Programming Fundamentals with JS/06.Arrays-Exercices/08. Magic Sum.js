function printMagicSum(numbers, magicSum) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let currentSum = numbers[i] + numbers[j];

      if (currentSum === magicSum) {
        console.log(`${numbers[i]} ${numbers[j]}`);
      }
    }
  }
}
printMagicSum([1, 7, 6, 2, 19, 23], 8);
