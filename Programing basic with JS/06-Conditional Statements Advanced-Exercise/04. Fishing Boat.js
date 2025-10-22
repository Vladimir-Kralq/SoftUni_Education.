function fishingBoat(budget, season, fishers) {
  let naem = 0;

  switch (season) {
    case "Spring":
      naem = 3000;
      break;
    case "Summer":
    case "Autumn":
      naem = 4200;
      break;
    case "Winter":
      naem = 2600;
      break;
  }
  if (fishers <= 6) {
    naem *= 0.9;
  } else if (fishers >= 7 && fishers <= 11) {
    naem *= 0.85;
  } else {
    naem *= 0.75;
  }

  if (fishers % 2 === 0 && season != "Autumn") {
    naem *= 0.95;
  }

  if (budget >= naem) {
    console.log(`Yes! You have ${(budget - naem).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(naem - budget).toFixed(2)} leva.`
    );
  }
}

fishingBoat(3000, "Summer", 11);
