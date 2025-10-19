function workingDays(days) {
  switch (days) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("Working day");
      break;

    case "Sunday":
    case "Saturday":
      console.log("Weekend");
      break;
    default:
      console.log("Error");
  }
}

workingDays("Sunday");
