function printPirates(input) {
  let cities = {};
  let line = input.shift();

  while (line !== "Sail") {
    let [town, population, gold] = line.split("||");
    population = Number(population);
    gold = Number(gold);

    if (!cities[town]) {
      cities[town] = { population: 0, gold: 0 };
    }
    cities[town].population += population;
    cities[town].gold += gold;

    line = input.shift();
  }

  line = input.shift();

  while (line !== "End") {
    let tokens = line.split("=>");
    let action = tokens[0];
    let town = tokens[1];

    if (action === "Plunder") {
      let peopleKilled = Number(tokens[2]);
      let goldStolen = Number(tokens[3]);

      cities[town].population -= peopleKilled;
      cities[town].gold -= goldStolen;

      console.log(
        `${town} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`,
      );

      if (cities[town].population <= 0 || cities[town].gold <= 0) {
        delete cities[town];
        console.log(`${town} has been wiped off the map!`);
      }
    } else if (action === "Prosper") {
      let goldToAdd = Number(tokens[2]);

      if (goldToAdd < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        cities[town].gold += goldToAdd;
        console.log(
          `${goldToAdd} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`,
        );
      }
    }
    line = input.shift();
  }

  let cityNames = Object.keys(cities);

  if (cityNames.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${cityNames.length} wealthy settlements to go to:`,
    );
    for (let town of cityNames) {
      console.log(
        `${town} -> Population: ${cities[town].population} citizens, Gold: ${cities[town].gold} kg`,
      );
    }
  } else {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!",
    );
  }
}
printPirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
