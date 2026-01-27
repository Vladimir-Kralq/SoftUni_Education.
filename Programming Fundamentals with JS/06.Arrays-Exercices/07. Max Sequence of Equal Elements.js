function printMaxSequince(arr) {
  let longestSequence = [];

  for (let i = 0; i < arr.length; i++) {
    let currentSequence = [arr[i]];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentSequence.push(arr[j]);
      } else {
        break;
      }
    }

    if (currentSequence.length > longestSequence.length) {
      longestSequence = currentSequence;
    }
  }

  console.log(longestSequence.join(" "));
}
printMaxSequince([0, 1, 1, 5, 2, 2, 6, 3, 3]);