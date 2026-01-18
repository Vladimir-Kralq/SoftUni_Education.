function spiceMustFlow(startYield) {
  let days = 0;
  let totalSpice = 0;
  const consumption = 26;

  while (startYield >= 100) {
    days++;
    totalSpice += startYield;

    totalSpice -= consumption;
    if (totalSpice < 0) totalSpice = 0;

    startYield -= 10;
  }

  totalSpice -= consumption;
  if (totalSpice < 0) totalSpice = 0;

  console.log(days);
  console.log(totalSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);
