function countStringOccurrences(text, word) {
  text = text.replaceAll(",", " ");
  text = text.replaceAll(".", " ");
  text = text.replaceAll("!", " ");
  text = text.replaceAll("?", " ");

  let allWords = text.split(" ");
  let count = 0;
  for (let currentWord of allWords) {
    if (currentWord === word) {
      count++;
    }
  }

  console.log(count);
}

countStringOccurrences(
  "This is a word and it also is a sentence",

  "is",
);
