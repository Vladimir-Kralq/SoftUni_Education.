function dungeonQuest(input) {
  let health = 100;
  let coins = 0;

  let rooms = input.split("|");

  for (let i = 0; i < rooms.length; i++) {
    let roomParts = rooms[i].split(" ");
    let command = roomParts[0];
    let value = Number(roomParts[1]);

    let roomNumber = i + 1;

    if (command === "potion") {
      let healedAmount = value;
      if (health + healedAmount > 100) {
        healedAmount = 100 - health;
      }
      health += healedAmount;
      console.log(`You healed for ${healedAmount} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      coins += value;
      console.log(`You found ${value} coins.`);
    } else {
      health -= value;

      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${roomNumber}`);
        return;
      }
    }
  }

  console.log("You've made it!");
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}
