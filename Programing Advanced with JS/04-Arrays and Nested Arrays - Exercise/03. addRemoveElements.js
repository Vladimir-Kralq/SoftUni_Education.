function addRemoveElements(commands) {
  let result = [];
  let num = 1;

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "add") {
      result.push(num++);
    } else {
      result.pop();
      num++;
    }
  }
  return result.length != 0 ? result.join("\n") : "Empty";
}
console.log(addRemoveElements(["add", "add", "add", "add"]));
