function needforSpeed(input) {
  let n = Number(input.shift());
  let cars = {};

  for (let i = 0; i < n; i++) {
    let [car, mileage, fuel] = input.shift().split("|");
    cars[car] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  }

  for (let line of input) {
    if (line === "Stop") break;

    let parts = line.split(" : ");
    let command = parts[0];
    let car = parts[1];

    switch (command) {
      case "Drive":
        let distance = Number(parts[2]);
        let fuelNeeded = Number(parts[3]);

        if (cars[car].fuel < fuelNeeded) {
          console.log("Not enough fuel to make that ride");
        } else {
          cars[car].mileage += distance;
          cars[car].fuel -= fuelNeeded;
          console.log(
            `${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`,
          );

          if (cars[car].mileage >= 100000) {
            delete cars[car];
            console.log(`Time to sell the ${car}!`);
          }
        }
        break;

      case "Refuel":
        let fuelToFill = Number(parts[2]);
        let currentFuel = cars[car].fuel;
        let addedFuel = Math.min(75 - currentFuel, fuelToFill);

        cars[car].fuel += addedFuel;

        console.log(`${car} refueled with ${addedFuel} liters`);
        break;

      case "Revert":
        let kilometers = Number(parts[2]);
        cars[car].mileage -= kilometers;

        if (cars[car].mileage < 10000) {
          cars[car].mileage = 10000;
        } else {
          console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
        break;
    }
  }

  for (let car in cars) {
    console.log(
      `${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`,
    );
  }
}

needforSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
