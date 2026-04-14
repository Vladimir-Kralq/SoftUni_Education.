function sameNum(int) {
  const string = int.toString().split("");
  let isSame = true;
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    let current= string[i];
    let next = string[i + 1];
    if (current !== next && next !== undefined) {
      isSame = false;
    }

    sum += Number(string[i]);
  }
  return `${isSame}\n ${sum}`;
}
console.log(sameNum(1234));
