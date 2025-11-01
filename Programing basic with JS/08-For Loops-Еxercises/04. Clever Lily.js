function cleverLily(years, washingMachinePrice, toyPrice) {
  let toys = 0; money = 0; brotherTake = 0; giftMoney = 0;

  for (let i = 1; i <= years; i++) {
    if (i % 2 !== 0) {
      toys++;
    } else if (i % 2 === 0) {
      giftMoney += 10;
      money += giftMoney;
      brotherTake += 1;
    }
  }

  let totalMoney = money + toyPrice * toys - brotherTake;
  const diff = Math.abs(totalMoney - washingMachinePrice);

  if (totalMoney >= washingMachinePrice) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}

cleverLily(10, 170.0, 6);
