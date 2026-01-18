function printCalculator(number, operator, anotherNum) {
  let sum = 0;
  if (operator === "+") {
    sum = number + anotherNum;
  } else if (operator === "-") {
    sum = number - anotherNum;
  } else if (operator === "/") {
    sum = number / anotherNum;
  } else if (operator === "*") {
    sum = number * anotherNum;
  }

  console.log(sum.toFixed(2));
}

printCalculator(25.5, "-", 3);
