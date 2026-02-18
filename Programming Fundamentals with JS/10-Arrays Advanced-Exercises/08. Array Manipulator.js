function arrayManipulator(arr, commands) {
  for (let line of commands) {
    let parts = line.split(" ");
    let cmd = parts[0];

    if (cmd === "add") {
      let index = Number(parts[1]);
      let element = Number(parts[2]);
      arr.splice(index, 0, element);
    } else if (cmd === "addMany") {
      let index = Number(parts[1]);
      let elements = parts.slice(2).map(Number);
      arr.splice(index, 0, ...elements);
    } else if (cmd === "contains") {
      let element = Number(parts[1]);
      console.log(arr.indexOf(element));
    } else if (cmd === "remove") {
      let index = Number(parts[1]);
      arr.splice(index, 1);
    } else if (cmd === "shift") {
      let positions = Number(parts[1]) % arr.length;
      for (let i = 0; i < positions; i++) {
        arr.push(arr.shift());
      }
    } else if (cmd === "sumPairs") {
      let summed = [];
      for (let i = 0; i < arr.length; i += 2) {
        let first = arr[i];
        let second = i + 1 < arr.length ? arr[i + 1] : 0;
        summed.push(first + second);
      }
      arr = summed;
    } else if (cmd === "print") {
      console.log(`[ ${arr.join(", ")} ]`);
      break;
    }
  }
}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"],
);
