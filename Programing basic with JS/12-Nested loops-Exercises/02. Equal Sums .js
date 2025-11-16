function equalSums(startNum, endNum) {
  let result = "";

  for (let num = startNum; num <= endNum; num++) {
    const numString = String(num);

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numString.length; i++) {
      const digit = Number(numString[i]); // ← важно!

      if (i % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }

    if (evenSum === oddSum) {
      result += num + " ";
    }
  }

  console.log(result.trim());
}
equalSums(100000, 100050);
