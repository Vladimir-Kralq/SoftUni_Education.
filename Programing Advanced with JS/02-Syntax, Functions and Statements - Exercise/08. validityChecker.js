function validityChecker(x1, y1, x2, y2) {
  function getResult(x1, y1, x2, y2) {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    return Number.isInteger(distance) ? "valid" : "invalid";
  }

  let result = "";
  result += `{${x1}, ${y1}} to {0, 0} is ${getResult(x1, y1, 0, 0)}\n`;
  result += `{${x2}, ${y2}} to {0, 0} is ${getResult(x2, y2, 0, 0)}\n`;
  result += `{${x1}, ${y1}} to {${x2}, ${y2}} is ${getResult(x1, y1, x2, y2)}`;

  return result;
}

console.log(validityChecker(3, 0, 0, 4));
