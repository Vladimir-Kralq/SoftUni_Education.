function numOperation(num1, num2, simbol) {
  let total;

  if ((simbol === "/" || simbol === "%") && num2 === 0) {
    console.log(`Cannot divide ${num1} by zero`);
    return;
  }

  switch (simbol) {
    case "+":
      total = num1 + num2;
      console.log(
        `${num1} ${simbol} ${num2} = ${total} - ${
          total % 2 === 0 ? "even" : "odd"
        }`
      );
      break;

    case "-":
      total = num1 - num2;
      console.log(
        `${num1} ${simbol} ${num2} = ${total} - ${
          total % 2 === 0 ? "even" : "odd"
        }`
      );
      break;

    case "*":
      total = num1 * num2;
      console.log(
        `${num1} ${simbol} ${num2} = ${total} - ${
          total % 2 === 0 ? "even" : "odd"
        }`
      );
      break;

    case "/":
      total = num1 / num2;
      console.log(`${num1} / ${num2} = ${total.toFixed(2)}`);
      break;

    case "%":
      total = num1 % num2;
      console.log(`${num1} % ${num2} = ${total}`);
      break;
  }
}

numOperation(10, 1, "-");
