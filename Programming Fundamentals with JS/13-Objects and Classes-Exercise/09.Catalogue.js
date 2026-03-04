function solve(input) {
  let sortedItems = input.sort((a, b) => a.localeCompare(b));

  let currentLetter = "";

  for (let line of sortedItems) {
    let [name, price] = line.split(" : ");

    let firstLetter = name[0];

    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;
      console.log(currentLetter);
    }

    console.log(`  ${name}: ${price}`);
  }
}
