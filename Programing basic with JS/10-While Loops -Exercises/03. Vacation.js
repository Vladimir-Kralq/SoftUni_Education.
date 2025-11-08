function vacation(input) {
  let moneyNeeds = Number(input[0]);
  let available = Number(input[1]);
  let index = 2;
  let spendDays = 0;
  let days = 0;

  while (available < moneyNeeds) {
    let action = input[index++];
    let amount = Number(input[index++]);
    days++;

    if (action === "spend") {
      available -= amount;
      if (available < 0) available = 0;
      spendDays++;
    } else if (action === "save") {
      available += amount;
      spendDays = 0;
    }

    if (spendDays === 5) {   
      console.log("You can't save the money.");
      console.log(days);
      return;
    }

    if (available >= moneyNeeds) {
      console.log(`You saved the money for ${days} days.`);
      return;
    }
  }
}
vacation([
  "2000",
  "1000",
  "spend",
  "1200",
  "save",
  "2000"
]);
