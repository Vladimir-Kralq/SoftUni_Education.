function theImitationGame(input) {
  let message = input.shift();
  let command = input.shift();

  while (command !== "Decode") {
    let tokens = command.split("|");
    let action = tokens.shift();

    if (action === "Move") {
      let n = Number(tokens.shift());

      let firstPart = message.slice(0, n);
      let secondPart = message.slice(n);
      message = secondPart + firstPart;
    } else if (action === "Insert") {
      let index = Number(tokens.shift());
      let value = tokens.shift();

      let prefix = message.slice(0, index);
      let suffix = message.slice(index);
      message = prefix + value + suffix;
    } else if (action === "ChangeAll") {
      let substring = tokens.shift();
      let replacement = tokens.shift();

      message = message.split(substring).join(replacement);
    }

    command = input.shift();
  }

  console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
