function arrayManipulations(input) {
  let arr = input.shift().split(" ").map(Number);

  for (let command of input) {
    let parts = command.split(" ");
    let action = parts[0];

    if (action === "Add") {
      arr.push(Number(parts[1]));
    } else if (action === "Remove") {
      let num = Number(parts[1]);
      arr = arr.filter((x) => x !== num);
    } else if (action === "RemoveAt") {
      let index = Number(parts[1]);
      arr.splice(index, 1);
    } else if (action === "Insert") {
      let num = Number(parts[1]);
      let index = Number(parts[2]);
      arr.splice(index, 0, num);
    }
  }

  console.log(arr.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
