function everest(input) {
  let height = 5364;
  let days = 1;
  let index = 0;
  const peakHeight = 8848;

  while (input[index] !== "END" && days <= 5 && height < peakHeight) {
    let isResting = input[index];
    let metersClimbed = Number(input[index + 1]);

    if (isResting === "Yes") {
      days++;

      if (days > 5) {
        break;
      }
    }

    height += metersClimbed;

    if (height >= peakHeight) {
      break;
    }

    index += 2;
  }

  if (height >= peakHeight) {
    console.log(`Goal reached for ${days} days!`);
  } else {
    console.log(`Failed!`);
    console.log(`${height}`);
  }
}

everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
