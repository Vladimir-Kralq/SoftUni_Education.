function walking(input) {
  let goal = 10000;
  let index = 0;
  let totalSteps = 0;

  while (index < input.length) {
    let command = input[index++];

    if (command === "Going home") {
      totalSteps += Number(input[index++]);
      break;
    }

    totalSteps += Number(command);

    if (totalSteps >= goal) {
      break;
    }
  }

  let diff = Math.abs(totalSteps - goal);

  if (totalSteps >= goal) {
    console.log("Goal reached! Good job!");
    console.log(`${diff} steps over the goal!`);
  } else {
    console.log(`${diff} more steps to reach goal.`);
  }
}

walking(["1000", "1500", "2000", "6500"]);
