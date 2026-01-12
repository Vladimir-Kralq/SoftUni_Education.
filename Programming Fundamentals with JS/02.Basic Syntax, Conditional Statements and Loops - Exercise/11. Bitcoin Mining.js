function printBitcoin(input) {
  const bitcoinPrice = 11949.16;
  const goldPricePerGram = 67.51;

  let totalMoney = 0;
  let totalBitcoins = 0;
  let firstBitcoinDay = 0;

  for (let i = 0; i < input.length; i++) {
    let day = i + 1;
    let goldMined = input[i];

    if (day % 3 === 0) {
      goldMined *= 0.7;
    }

    totalMoney += goldMined * goldPricePerGram;

    while (totalMoney >= bitcoinPrice) {
      if (totalBitcoins === 0) {
        firstBitcoinDay = day;
      }
      totalBitcoins++;
      totalMoney -= bitcoinPrice;
    }
  }

  console.log(`Bought bitcoins: ${totalBitcoins}`);
  if (totalBitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
printBitcoin([100, 200, 300]);
