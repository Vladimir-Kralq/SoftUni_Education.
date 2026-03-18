function printRevealWords(words, template) {
  let separateWords = words.split(", ");

  let sentence = template.split(" ");

  for (let word of separateWords) {
    let starPattern = "*".repeat(word.length);

    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === starPattern) {
        sentence[i] = word;
      }
    }
  }

  console.log(sentence.join(" "));
}

printRevealWords(
  "great",
  "softuni is ***** place for learning new programming languages",
);
