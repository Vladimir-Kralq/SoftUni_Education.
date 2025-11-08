function moving(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let height = Number(input[2]);

  let index = 3;
  let metersTotal = width * length * height;
  let usedSpace = 0;

  while (input[index] !== "Done" && index < input.length) {
    usedSpace += Number(input[index]);
    index++;

    if (usedSpace > metersTotal) {
      break;
    }
  }

  const diff = Math.abs(metersTotal - usedSpace);

  if (usedSpace > metersTotal) {
    console.log(`No more free space! You need ${diff} Cubic meters more.`);
  } else {
    console.log(`${diff} Cubic meters left.`);
  }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
