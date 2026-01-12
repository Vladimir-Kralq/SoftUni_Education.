function printAndSum(startNum, endNum) {
  let currentNum = "";
  let sumNumbers = 0;

  for (let i = startNum; i <= endNum; i++) {
    currentNum += i + " ";
    sumNumbers += i;
  }

  console.log(currentNum.trim());
  console.log(`Sum: ${sumNumbers}`);
}
