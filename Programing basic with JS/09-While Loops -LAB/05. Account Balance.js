function accBalance(input) {
  let index = 0;
  let array = input[index];
  let sum = 0;

  while (array !== "NoMoreMoney") {
    let money = Number(array);
    if (money < 0) {
      console.log(`Invalid operation!`);
      break;
    }

    sum += money;
    console.log(`Increase: ${money.toFixed(2)}`);

    index++;
    array = input[index];
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}
accBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
