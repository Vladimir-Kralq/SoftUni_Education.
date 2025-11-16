function multiplicationTable(input) {
  let num = Number(input);

  let firstDigit = Math.floor(num / 100);

  let secondDigit = Math.floor((num % 100) / 10);

  let thirdDigit = num % 10;

  for (let i = 1; i <= thirdDigit; i++) {
    for (let j = 1; j <= secondDigit; j++) {
      for (let k = 1; k <= firstDigit; k++) {
        console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
      }
    }
  }
}

multiplicationTable(324);
