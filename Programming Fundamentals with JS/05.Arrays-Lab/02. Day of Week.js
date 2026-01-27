function printDayOfWeek(day) {
  let DayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday ",
    "Friday",
    "Saturday ",
    "Sunday",
  ];

  if (day >= 1 && day <= 7) {
    console.log(DayOfWeek[day - 1]);
  } else {
    console.log(`Invalid day!`);
  }
}
printDayOfWeek(11);
