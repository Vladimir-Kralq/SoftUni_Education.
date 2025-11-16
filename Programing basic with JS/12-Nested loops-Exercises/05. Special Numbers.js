function specialNum(n) {
  let result = "";

  for (let i = 1111; i <= 9999; i++) {
    let currentNum = String(i);
    let isSpecial = true;

    for (let j = 0; j < 4; j++) {
      let digit = Number(currentNum[j]);

      if (digit === 0) {
        isSpecial = false;
        break;
      }

      if (n % digit !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial) {
      result += i + " ";
    }
  }

  console.log(result.trim());
}
specialNum(3);
