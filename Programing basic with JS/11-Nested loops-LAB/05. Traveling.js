function traveling(input) {
  let i = 0;
  while (input[i] !== "End") {
    let travel = input[i];
    let minBudget = Number(input[i + 1]);
    let savedMoney = 0;
    i += 2;

    while (savedMoney < minBudget) {
      let savedAmount = Number(input[i]);
      savedMoney += savedAmount;
      i++;
    }

    console.log(`Going to ${travel}!`);
  }
}

traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
