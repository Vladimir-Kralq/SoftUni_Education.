function journey(budget, season) {
  let place;
  let spent;
  let destination;

  if (budget <= 100) {
    destination = "Bulgaria";
    switch (season) {
      case "summer":
        spent = budget * 0.3;
        place = "Camp";
        break;
      case "winter":
        spent = budget * 0.7;
        place = "Hotel";
        break;
    }
  } else if (budget <= 1000) {
    destination = "Balkans";
    switch (season) {
      case "summer":
        spent = budget * 0.4;
        place = "Camp";
        break;
      case "winter":
        spent = budget * 0.8;
        place = "Hotel";
        break;
    }
  } else {
    destination = "Europe";
    place = "Hotel";
    spent = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${place} - ${spent.toFixed(2)}`);
}
journey(50, "summer");
