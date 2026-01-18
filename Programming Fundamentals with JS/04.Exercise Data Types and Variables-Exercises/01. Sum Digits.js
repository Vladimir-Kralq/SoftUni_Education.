function sumDigits(number) {
  let stringNum = String(number);
  let sum = 0;

  for (let i = 0; i < stringNum.length; i++) {
    let currentDigit = Number(stringNum[i]);
    sum += currentDigit;
  }

  console.log(sum);
}

sumDigits(245678);
