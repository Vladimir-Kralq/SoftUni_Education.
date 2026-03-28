function stringGame(input) {
  let text = input.shift();

  while (input[0] !== "Done") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];

    switch (command) {
      case "Change":
        let char = tokens[1];
        let replacement = tokens[2];

        let regex = new RegExp(char, "g");
        text = text.replace(regex, replacement);
        console.log(text);
        break;

      case "Includes":
        let substring = tokens[1];

        console.log(text.includes(substring) ? "True" : "False");
        break;

      case "End":
        let endSubstring = tokens[1];

        console.log(text.endsWith(endSubstring) ? "True" : "False");
        break;

      case "Uppercase":
        text = text.toUpperCase();
        console.log(text);
        break;

      case "FindIndex":
        let findChar = tokens[1];

        console.log(text.indexOf(findChar));
        break;

      case "Cut":
        let startIndex = Number(tokens[1]);
        let count = Number(tokens[2]);

        text = text.substr(startIndex, count);
        console.log(text);
        break;
    }
  }
}

stringGame([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
