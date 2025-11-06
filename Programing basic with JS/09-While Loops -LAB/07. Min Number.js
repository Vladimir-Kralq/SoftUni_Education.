function maxNum(input) {
  let index = 0;
  let current = input[index];
  let minNum = Number.MAX_SAFE_INTEGER;

  while (current !== "Stop") {
    let currentNum = Number(current);
    if (currentNum < minNum) {
      minNum = currentNum;
    }
    index++;
    current = input[index];
  }

  console.log(minNum);
}

maxNum(["100", "99", "80", "70", "Stop"]);
