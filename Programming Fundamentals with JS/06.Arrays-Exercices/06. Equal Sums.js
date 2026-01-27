function printEqualSum(numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  let leftSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    let rightSum = sum - leftSum - currentNumber;

    if (rightSum === leftSum) {
      console.log(i);
      return;
    }

    leftSum += currentNumber;
  }

  console.log("no");
}
printEqualSum([1, 2, 3, 3]);
