function cardGame(arr) {
  let players = new Map();

  for (let line of arr) {
    let [name, card] = line.split(": ");
    let cards = card.split(", ");

    if (!players.has(name)) {
      players.set(name, []);
    }

    let hand = players.get(name);

    for (let card of cards) {
      if (!hand.includes(card)) {
        hand.push(card);
      }
    }
  }

  let powerValues = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let typeValues = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  for (let [name, hand] of players) {
    let sum = 0;
    for (let card of hand) {
      let type = card.slice(-1);
      let power = card.slice(0, -1);
      let powerNum = powerValues[power] ?? Number(power);
      let typeNum = typeValues[type];
      sum += powerNum * typeNum;
    }

    console.log(`${name}: ${sum}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
