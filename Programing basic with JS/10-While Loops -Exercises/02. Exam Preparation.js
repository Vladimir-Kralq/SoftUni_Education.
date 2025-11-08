function examPrep(input) {
  let maxPoorGrades = Number(input[0]);
  let index = 1;
  let poorGrades = 0;
  let sumGrades = 0;
  let totalProblems = 0;
  let lastProblem = "";

  while (input[index] !== "Enough") {
    let problemName = input[index++];
    let grade = Number(input[index++]);

    sumGrades += grade;
    totalProblems++;
    lastProblem = problemName;

    if (grade <= 4) {
      poorGrades++;
      if (poorGrades === maxPoorGrades) {
        console.log(`You need a break, ${poorGrades} poor grades.`);
        return;
      }
    }
  }

  let average = (sumGrades / totalProblems).toFixed(2);
  console.log(`Average score: ${average}`);
  console.log(`Number of problems: ${totalProblems}`);
  console.log(`Last problem: ${lastProblem}`);
}

examPrep([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
