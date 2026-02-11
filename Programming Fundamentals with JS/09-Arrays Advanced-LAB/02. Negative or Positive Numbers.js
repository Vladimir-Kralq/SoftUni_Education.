function printNegativeOrPositiveNumbers(arr) {
  let newArr = [];
  arr.map(Number);
  for (let num of arr) {
    if (num < 0) {
      newArr.unshift(num);
    } else {
      newArr.push(num);
    }
  }
  console.log(newArr.join("\n"));
}
printNegativeOrPositiveNumbers(["7", "-2", "8", "9"]);
