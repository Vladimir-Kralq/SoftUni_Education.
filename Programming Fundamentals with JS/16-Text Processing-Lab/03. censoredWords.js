function censorWords(sentence, word){
let replacementLength=word.length;
let replacement="*".repeat(replacementLength);
let result=sentence.replaceAll(word,replacement);

console.log(result);
}
censorWords(
  "A small sentence with some words",

  "small",
);