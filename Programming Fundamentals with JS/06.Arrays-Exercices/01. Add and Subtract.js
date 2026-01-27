function printAddSubtract(array) {
  let originalSum = 0;
  let modifiedSum = 0;
  let modifiedArr = [];

  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    originalSum += number;

    if (number % 2 === 0) {
      modifiedArr[i] = number + i;
    } else {
      modifiedArr[i] = number - i;
    }

    modifiedSum += modifiedArr[i];
  }

  console.log(modifiedArr);
  console.log(originalSum);
  console.log(modifiedSum);
}

printAddSubtract([5, 15, 23, 56, 35]);
