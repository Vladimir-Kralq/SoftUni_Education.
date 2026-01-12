function printVacation(groupSize, typeofGroup, day) {
  let pricePerPerson = 0;
  let totalPrice = 0;
  switch (day) {
    case "Friday":
      if (typeofGroup === "Students") {
        pricePerPerson = 8.45;
      } else if (typeofGroup === "Business") {
        pricePerPerson = 10.9;
      } else if (typeofGroup === "Regular") {
        pricePerPerson = 15.0;
      }
      break;

    case "Saturday":
      if (typeofGroup === "Students") {
        pricePerPerson = 9.8;
      } else if (typeofGroup === "Business") {
        pricePerPerson = 15.6;
      } else if (typeofGroup === "Regular") {
        pricePerPerson = 20.0;
      }
      break;

    case "Sunday":
      if (typeofGroup === "Students") {
        pricePerPerson = 10.46;
      } else if (typeofGroup === "Business") {
        pricePerPerson = 16.0;
      } else if (typeofGroup === "Regular") {
        pricePerPerson = 22.5;
      }
      break;
  }

  totalPrice = groupSize * pricePerPerson;

  if (typeofGroup === "Students" && groupSize >= 30) {
    totalPrice *= 0.85;
  } else if (typeofGroup === "Business" && groupSize >= 100) {
    totalPrice -= 10 * pricePerPerson;
  } else if (typeofGroup === "Regular" && groupSize >= 10 && groupSize <= 20) {
    totalPrice *= 0.95;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

printVacation(40, "Regular", "Saturday");
