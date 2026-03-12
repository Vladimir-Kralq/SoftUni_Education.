function printOddOccurrences(arr) {
  let words = arr.toLowerCase().split(" ");

  let buffer = new Map();

  for (let word of words) {
    if (!buffer.has(word)) {
      buffer.set(word, 0);
    }
    let value = buffer.get(word);
    value++;
    buffer.set(word, value);
  }
  let result = [];
  for (let [word, count] of buffer) {
    if (count % 2 !== 0) {
      result.push(word);
    }
  }
  console.log(result.join(" "));
}
printOddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
