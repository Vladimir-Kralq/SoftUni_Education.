function skiTrip(days, roomType, grade) {
  let price;

  switch (roomType) {
    case "room for one person":
      price = 18;
      break;

    case "apartment":
      price = 25;
      break;

    case "president apartment":
      price = 35;
      break;
  }

  let nights = days - 1;
  price = price * nights;

  if (roomType === "room for one person") {
    price = price;
  } else if (roomType === "apartment" && nights < 10) {
    price *= 0.7;
  } else if (roomType === "apartment" && nights < 15) {
    price *= 0.65;
  } else if (roomType === "apartment" && nights >= 15) {
    price *= 0.5;
  }

  if (roomType === "president apartment" && nights < 10) {
    price *= 0.9;
  } else if (roomType === "president apartment" && nights < 15) {
    price *= 0.85;
  } else if (roomType === "president apartment" && nights >= 15) {
    price *= 0.8;
  }

  if (grade === "positive") {
    price *= 1.25;
  } else if (grade === "negative") {
    price *= 0.9;
  }

  console.log(price.toFixed(2));
}
skiTrip(14, "apartment", "positive");
