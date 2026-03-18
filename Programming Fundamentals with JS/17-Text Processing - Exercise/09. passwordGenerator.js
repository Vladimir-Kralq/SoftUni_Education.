function generatePassword(input) {
  let combined = (input[0] + input[1]).toLowerCase();
  let replacementWord = input[2].toUpperCase();

  let vowels = ["a", "e", "i", "o", "u"];
  let replacementIndex = 0;

  let combinedArray = combined.split("");

  for (let i = 0; i < combinedArray.length; i++) {
    if (vowels.includes(combinedArray[i])) {
      combinedArray[i] = replacementWord[replacementIndex];

      replacementIndex++;

      if (replacementIndex >= replacementWord.length) {
        replacementIndex = 0;
      }
    }
  }

  let password = combinedArray.reverse().join("");
  console.log(`Your generated password is ${password}`);
}

generatePassword(["ilovepizza", "ihatevegetables", "orange"]);
