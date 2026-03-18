function pascalCaseSplitter(str) {
  let result = [];
  let wordStart = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      result.push(str.slice(wordStart, i));
      wordStart = i;
    }
  }

  result.push(str.slice(wordStart));

  console.log(result.join(", "));
}
pascalCaseSplitter("HoldTheDoor");
