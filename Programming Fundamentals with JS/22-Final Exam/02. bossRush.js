function bossRush(input) {
  let count = Number(input.shift());

  let pattern = /^\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#$/;

  for (let i = 0; i < count; i++) {
    let currentLine = input[i];
    let match = currentLine.match(pattern);

    if (match) {
      let bossName = match[1];
      let title = match[2];

      console.log(`${bossName}, The ${title}`);
      console.log(`>> Strength: ${bossName.length}`);
      console.log(`>> Armor: ${title.length}`);
    } else {
      console.log("Access denied!");
    }
  }
}

bossRush([
  "3",
  "|PETER|:#Lead architect#",
  "|GEORGE|:#High Overseer#",
  "|ALEX|:#Assistant Game Developer#",
]);
