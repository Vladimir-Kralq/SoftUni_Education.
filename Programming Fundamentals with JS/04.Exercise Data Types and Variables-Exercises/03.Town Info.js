function printTownInfo(town, population, area) {
  let isTownInfoIsValid = true;

  if (town.length < 3) {
    console.log("Town name must be at least 3 characters!");
    isTownInfoIsValid = false;
  }

  if (population < 0) {
    console.log("Population must be a positive number!");
    isTownInfoIsValid = false;
  }

  if (area < 0) {
    console.log("Area must be a positive number!");
    isTownInfoIsValid = false;
  }

  if (isTownInfoIsValid) {
    console.log(
      `Town ${town} has population of ${population} and area ${area} square km.`,
    );
  }
}
printTownInfo("Sofia", 1286383, 492);
