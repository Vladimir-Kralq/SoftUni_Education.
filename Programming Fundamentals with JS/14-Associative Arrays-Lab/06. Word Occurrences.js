function printWordOccurrences(data) {
  let map = new Map();
  for (let word of data) {
    if (map.has(word)) {
      let currentCount = map.get(word);
      currentCount++;

      map.set(word, currentCount);
    } else {
      map.set(word, 1);
    }
  }

  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
  for (let [key, value] of sorted) {
    console.log(`${key} -> ${value} times `);
  }
}
printWordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
