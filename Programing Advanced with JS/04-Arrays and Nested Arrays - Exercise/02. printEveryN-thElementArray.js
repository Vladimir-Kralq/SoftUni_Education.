function printEveryNElementArray(str, step) {
  let res = [];

  for (let i = 0; i < str.length; i += step) {
    res.push(str[i]);
  }

  return res;
}

console.log(printEveryNElementArray(["5", "20", "31", "4", "20"], 2));
