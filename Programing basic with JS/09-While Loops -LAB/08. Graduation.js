function graduation(input) {
  let index = 0;
  let name = input[index];

  let passedYears = 0;
  let totalGrade = 0;
  let expelsCount = 0;

  while (expelsCount < 2 && passedYears < 12) {
    index++;
    let grade = Number(input[index]);

    if (grade < 4) {
      expelsCount++;
      continue;
    }

    totalGrade += grade;
    passedYears++;
  }

  if (expelsCount < 2) {
    let average = totalGrade / passedYears;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
  } else {
    console.log(`${name} has been excluded at ${passedYears + 1} grade`);
  }
}

graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
