function deckBuilder(input) {
  const available = input.shift().split(":");
  const deck = [];

  const existsInAvailable = (card) => available.includes(card);

  while (input.length > 0) {
    const line = input.shift();
    if (line === "Ready") break;

    const tokens = line.split(" ");
    const action = tokens[0];

    if (action === "Add") {
      const card = tokens[1];

      if (!existsInAvailable(card)) {
        console.log("Card not found.");
      } else {
        deck.push(card);
      }
    } else if (action === "Insert") {
      const card = tokens[1];
      const index = Number(tokens[2]);

      const validIndex =
        Number.isInteger(index) && index >= 0 && index < deck.length;
      if (!existsInAvailable(card) || !validIndex) {
        console.log("Error!");
      } else {
        deck.splice(index, 0, card);
      }
    } else if (action === "Remove") {
      const card = tokens[1];
      const pos = deck.indexOf(card);

      if (pos === -1) {
        console.log("Card not found.");
      } else {
        deck.splice(pos, 1);
      }
    } else if (action === "Swap") {
      const c1 = tokens[1];
      const c2 = tokens[2];

      const i1 = deck.indexOf(c1);
      const i2 = deck.indexOf(c2);

      [deck[i1], deck[i2]] = [deck[i2], deck[i1]];
    } else {
      deck.reverse();
    }
  }

  console.log(deck.join(" "));
}
deckBuilder([
  "Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
  "Add Moonfire",
  "Add Bite",
  "Insert Claw 0",
  "Swap Claw Moonfire",
  "Remove Bite",
  "Ready",
]);
