function bombNumbers(numbers, bombInfo) {
  let bomb = bombInfo[0];
  let power = bombInfo[1];

  while (numbers.includes(bomb)) {
    let index = numbers.indexOf(bomb);
    let start = Math.max(0, index - power);
    let count = power * 2 + 1;

    numbers.splice(start, count);
  }

  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }

  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
