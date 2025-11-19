function training(input) {
  const trainingDays = Number(input[0]);
  let km = Number(input[1]);
  let index = 2;
  let totalKm = km;

  for (let i = 0; i < trainingDays; i++) {
    const percentageIncrease = Number(input[index]);
    index++;
    km += km * (percentageIncrease / 100);
    totalKm += km;
  }

  if (totalKm >= 1000) {
    const moreKm = totalKm - 1000;
    console.log(
      `You've done a great job running ${Math.ceil(moreKm)} more kilometers!`
    );
  } else {
    const missingKm = 1000 - totalKm;
    console.log(
      `Sorry Mrs. Ivanova, you need to run ${Math.ceil(
        missingKm
      )} more kilometers`
    );
  }
}

training(["5", "30", "10", "15", "20", "5", "12"]);
