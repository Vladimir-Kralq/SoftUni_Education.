function train(input) {
  const juri = Number(input[0]);
  let index = 1;

  let totalScore = 0;
  let totalGradesCount = 0;

  while (input[index] !== "Finish") {
    let presentationName = input[index++];
    let scoreSumPresentation = 0;

    for (let i = 0; i < juri; i++) {
      let grade = Number(input[index++]);
      scoreSumPresentation += grade;

      totalScore += grade;
      totalGradesCount++;
    }

    const averageScore = scoreSumPresentation / juri;
    console.log(`${presentationName} - ${averageScore.toFixed(2)}.`);
  }

  const finalAssessment = totalScore / totalGradesCount;
  console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}
train([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
