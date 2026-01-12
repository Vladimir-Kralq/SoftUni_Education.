function printDivision(number) {
  let devisor = 0;

  if (number % 10 === 0) {
    devisor = 10;
  } else if (number % 7 === 0) {
    devisor = 7;
  } else if (number % 6 === 0) {
    devisor = 6;
  } else if (number % 3 === 0) {
    devisor = 3;
  } else if (number % 2 === 0) {
    devisor = 2;
  }

  if (devisor > 0) {
    console.log(`The number is divisible by ${devisor}`);
  } else {
    console.log("Not divisible");
  }
}
printDivision(15);
