function printFurniture(input) {
  let totalMoney = 0;
  console.log("Bought furniture:");

  while (input[0] !== "Purchase") {
    let line = input.shift();

    let regex = />>([A-Za-z]+)<<(\d+\.?\d*)!(\d+)/;
    let match = regex.exec(line);

    if (match) {
      let name = match[1];
      let price = Number(match[2]);
      let qty = Number(match[3]);

      console.log(name);
      totalMoney += price * qty;
    }
  }

  console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

printFurniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
