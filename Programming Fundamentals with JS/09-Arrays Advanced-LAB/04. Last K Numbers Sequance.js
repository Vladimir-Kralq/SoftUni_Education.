function printLastKNumbersSequance(n, k) {
  let newArr = [];
  newArr.push(1);

  for (let i = 1; i < n; i++) {
    let startIndex = i - k;

    if (startIndex < 0) {
      startIndex = 0;
    }

    let prevKNums = newArr.slice(startIndex, i);

    let sum = 0;
    for (let num of prevKNums) {
      sum += num;
    }

    newArr.push(sum);
  }

  console.log(newArr.join(" "));
}

printLastKNumbersSequance(6, 3);
