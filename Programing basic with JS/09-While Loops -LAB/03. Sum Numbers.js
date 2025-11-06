function sumNumbers(input) {
  let n = Number(input[0]);
  let index = 1;
  let sum = 0;

  while (sum < n) {
    let currentNum = Number(input[index]);
    sum += currentNum;
    index++;
  }

  console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]);
