function printRotatedArray(array, rotationsCount) {
  let rotatedArray = [];

  let rotationIndex = rotationsCount % array.length;

  for (let index = rotationIndex; index < array.length; index++) {
    rotatedArray.push(array[index]);
  }

  for (let index = 0; index < rotationIndex; index++) {
    rotatedArray.push(array[index]);
  }

  console.log(rotatedArray.join(" "));
}

printRotatedArray([51, 47, 32, 61, 21], 2);
