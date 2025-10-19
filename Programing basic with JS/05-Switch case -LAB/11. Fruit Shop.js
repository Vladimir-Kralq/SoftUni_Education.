function fruitShop(fruit, day, quantity) {
  let banana = 0;
  let apple = 0;
  let orange = 0;
  let grapefruit = 0;
  let kiwi = 0;
  let pineapple = 0;
  let grapes = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      banana = 2.5;
      apple = 1.2;
      orange = 0.85;
      grapefruit = 1.45;
      kiwi = 2.7;
      pineapple = 5.5;
      grapes = 3.85;
      break;

    case "Saturday":
    case "Sunday":
      banana = 2.7;
      apple = 1.25;
      orange = 0.9;
      grapefruit = 1.6;
      kiwi = 3;
      pineapple = 5.6;
      grapes = 4.2;
      break;
    default:
      console.log("error");
      return;
  }
  let total = 0;

  let price = 0;

  if (fruit === "banana") {
    price = banana;
  } else if (fruit === "apple") {
    price = apple;
  } else if (fruit === "orange") {
    price = orange;
  } else if (fruit === "grapefruit") {
    price = grapefruit;
  } else if (fruit === "kiwi") {
    price = kiwi;
  } else if (fruit === "pineapple") {
    price = pineapple;
  } else if (fruit === "grapes") {
    price = grapes;
  } else {
    console.log("error");
    return;
  }
  total = price * quantity;
  console.log(total.toFixed(2));
}

fruitShop("apple", "Tuesday", 2);
