function printTopInteger(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let isTopInt = true;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] <= numbers[j]) {
        isTopInt = false;
        break;
      }
    }

    if (isTopInt) {
      result.push(numbers[i]);
    }
  }

  console.log(result.join(" "));
}
printTopInteger([14, 24, 3, 19, 15, 17]);
