function simpleCalculator(numOne, numTwo, operator) {
  let operation;

  if (operator === "multiply") {
    operation = (x, y) => x * y;
  } else if (operator === "divide") {
    operation = (x, y) => x / y;
  } else if (operator === "add") {
    operation = (x, y) => x + y;
  } else if (operator === "subtract") {
    operation = (x, y) => x - y;
  }

  let result = operation(numOne, numTwo);
  console.log(result);
}

simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");
