function printReverseArray(number, array) {
  let newArray = [];

  for (let i = 0; i < number; i++) {
    let oldArray = array[i];
    newArray[i] = oldArray;
  }
  let reversedArray = [];
  newArray.reverse();

  console.log(newArray.join(" "));
}

printReverseArray(3, [10, 20, 30, 40, 50]);
