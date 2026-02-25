function printVacationDays(input) {
  let days = Number(input.shift());
  let budget = Number(input.shift());
  let persons = Number(input.shift());
  let petrolPerKm = Number(input.shift());
  let expensesPerPerson = Number(input.shift());
  let hotelRoom = Number(input.shift());

  let foodTotal = days * persons * expensesPerPerson;

  let hotelPerNight = persons * hotelRoom;
  if (persons > 10) hotelPerNight *= 0.75;

  let totalExpenses = foodTotal + (days * hotelPerNight);

  for (let day = 1; day <= days; day++) {
    let distance = Number(input.shift());
    totalExpenses += distance * petrolPerKm;

    if (day % 3 === 0 || day % 5 === 0) totalExpenses *= 1.40;
    if (day % 7 === 0) totalExpenses -= totalExpenses / persons;

    if (totalExpenses > budget) {
      console.log(
        `Not enough money to continue the trip. You need ${(totalExpenses - budget).toFixed(2)}$ more.`
      );
      return;
    }
  }

  console.log(
    `You have reached the destination. You have ${(budget - totalExpenses).toFixed(2)}$ budget left.`
  );
}

printVacationDays([
  "7",
  "12000",
  "5",
  "1.5",
  "10",
  "20",
  "512",
  "318",
  "202",
  "154",
  "222",
  "108",
  "123",
]);