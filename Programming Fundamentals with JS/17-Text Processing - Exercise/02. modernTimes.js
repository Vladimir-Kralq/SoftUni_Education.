function modernTimes(text) {
  let words = text.split(" ");

  for (let word of words) {
    if (word.startsWith("#") && word.length > 1) {
      let cleanWord = word.slice(1);

      if (
        cleanWord
          .toLowerCase()
          .split("")
          .every((c) => c >= "a" && c <= "z")
      ) {
        console.log(cleanWord);
      }
    }
  }
}

modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
