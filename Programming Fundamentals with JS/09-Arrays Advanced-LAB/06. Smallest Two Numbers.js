function smallestTwoNumbers(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr[0] + " " + arr[1]);
}
smallestTwoNumbers([30, 15, 50, 5]);
