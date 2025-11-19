function foodForPets(input) {
  const days = Number(input[0]);
  const quantityFood = Number(input[1]);

  let totalBiscuits = 0;
  let totalDog = 0;
  let totalCat = 0;

  let index = 2;
  for (let day = 1; day <= days; day++) {
    const dogFood = Number(input[index++]);
    const catFood = Number(input[index++]);

    totalDog += dogFood;
    totalCat += catFood;

    if (day % 3 === 0) {
      totalBiscuits += 0.1 * (dogFood + catFood); // 10% от общо изяденото количество
    }
  }

  const totalEatenFood = totalDog + totalCat;

  const eatenPercentage = (totalEatenFood / quantityFood) * 100;
  const dogPercentage = (totalDog / totalEatenFood) * 100;
  const catPercentage = (totalCat / totalEatenFood) * 100;

  console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`);
  console.log(`${eatenPercentage.toFixed(2)}% of the food has been eaten.`);
  console.log(`${dogPercentage.toFixed(2)}% eaten from the dog.`);
  console.log(`${catPercentage.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
