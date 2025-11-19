function familyTrip(budget, nights, priceNight, procentRazhodi) {
  if (nights > 7) {
    priceNight *= 0.95;
  }

  let accommodationCost = nights * priceNight;

  const extraCost = budget * (procentRazhodi / 100);

  let totalCost = accommodationCost + extraCost;

  if (budget >= totalCost) {
    let moneyLeft = budget - totalCost;
    console.log(
      `Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`
    );
  } else {
    let moneyNeeded = totalCost - budget;
    console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
  }
}

familyTrip(800.5, 8, 100, 2);
