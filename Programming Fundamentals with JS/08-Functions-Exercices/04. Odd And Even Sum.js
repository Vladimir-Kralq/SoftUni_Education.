function oddAndEvenSum(number) {
  
    function sumEven(num) {
    let sum = 0;

    while (num > 0) {
      let digit = num % 10;
      if (digit % 2 === 0) {
        sum += digit;
      }
      num = Math.trunc(num / 10);
    }
    return sum;
  }

  function sumOdd(num) {
    let sum = 0;

    while (num > 0) {
      let digit = num % 10;
      if (digit % 2 === 1) {
        sum += digit;
      }
      num = Math.trunc(num / 10);
    }
    return sum;
  }

  const oddSum = sumOdd(number);
  const evenSum = sumEven(number);

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
