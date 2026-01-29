function printRepeatString(value, count) {
  let result = "";

  for (let i = 0; i < count; i++) {
    result += value;
  }
  return result;
}
let result = printRepeatString("abc", 3);
console.log(result);
