function listOfNames(names) {
  let sortedNames = names
    .sort((a, b) => a.localeCompare(b))
    .map((name, index) => `${index + 1}.${name}`);

  return sortedNames.join("\n");
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));
