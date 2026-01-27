function printEqualArr(arr1, arr2) {
  let arraysAreEquals = true;
  let sum = 0;
  let diffIndex = -1;

  for (let i = 0; i < arr1.length; i++) {
    let firstValue = arr1[i];
    let secondValue = arr2[i];

    if (firstValue === secondValue) {
      sum += Number(firstValue);
    } else {
      arraysAreEquals = false;
      diffIndex = i;
      break;
    }
  }

  if (arraysAreEquals) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(
      `Arrays are not identical. Found difference at ${diffIndex} index`,
    );
  }
}

printEqualArr(["10", "20", "30"], ["10", "20", "30"]);
printEqualArr(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
printEqualArr(["1"], ["10"]);
