function printTrain(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split(" ");

    if (tokens[0] === "Add") {
      wagons.push(Number(tokens[1]));
    } else {
      addPassengers(Number(tokens[0]));
    }
  }

  function addPassengers(passengers) {
    for (let j = 0; j < wagons.length; j++) {
      if (wagons[j] + passengers <= maxCapacity) {
        wagons[j] += passengers;
        break;
      }
    }
  }

  console.log(wagons.join(" "));
}

printTrain(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
