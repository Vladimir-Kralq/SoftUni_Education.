function salary(input) {
  let tabsCount = Number(input[0]);
  let currentSalary = Number(input[1]);

  for (let i = 2; i < input.length; i++) {
    let site = input[i];
    let fine = 0;

    switch (site) {
      case "Facebook":
        fine = 150;
        break;
      case "Instagram":
        fine = 100;
        break;
      case "Reddit":
        fine = 50;
        break;
      default:
        break;
    }

    currentSalary -= fine;

    if (currentSalary <= 0) {
      console.log("You have lost your salary.");
      return;
    }
  }

  console.log(Math.round(currentSalary));
}

salary([
  10,
  750,
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
