function townPopulation(array) {
  const result = {};
  for (let town of array) {
    let tokens = town.split(" <-> ");
    let [name, population] = tokens;
    population = Number(population);

    if (result[name] == undefined) {
      result[name] = population;
    } else {
      result[name] += population;
    }
  }
  for (let name in result) {
    console.log(` ${name} : ${result[name]}`);
  }
}

console.log(
  townPopulation([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
  ]),
);
