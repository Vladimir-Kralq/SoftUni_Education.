function solve(input) {
  let words = input.split(/\s+/).filter((w) => w.length > 0);
  let totalSum = 0;

  words.forEach((word) => {
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];

    let number = Number(word.substring(1, word.length - 1));

    let firstPos = firstLetter.toLowerCase().charCodeAt(0) - 96;
    let lastPos = lastLetter.toLowerCase().charCodeAt(0) - 96;

    let currentResult = 0;

    if (firstLetter === firstLetter.toUpperCase()) {
      currentResult = number / firstPos;
    } else {
      currentResult = number * firstPos;
    }

    if (lastLetter === lastLetter.toUpperCase()) {
      currentResult -= lastPos;
    } else {
      currentResult += lastPos;
    }

    totalSum += currentResult;
  });

  console.log(totalSum.toFixed(2));
}

solve("A12b s17G");
