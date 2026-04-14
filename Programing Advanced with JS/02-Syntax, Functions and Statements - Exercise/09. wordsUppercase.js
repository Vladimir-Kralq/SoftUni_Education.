function solve(text) {
  let words = text.match(/\w+/g);

  let upperCaseWords = words.map((word) => word.toUpperCase());

  console.log(upperCaseWords.join(", "));
}

solve("Hi, how are you?");
solve("hello");
