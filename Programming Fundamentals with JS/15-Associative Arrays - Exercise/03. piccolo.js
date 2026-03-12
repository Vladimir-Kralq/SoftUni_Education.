function printPiccolo(arr) {
  let parking = new Map();

  for (let line of arr) {
    let [direction, carNumber] = line.split(", ");
    if (direction === "IN") {
      parking.set(carNumber, true);
    } else if (direction === "OUT") {
      parking.delete(carNumber);
    }
  }
  if (parking.size === 0) {
    console.log("Parking Lot is Empty");
    return;
  }
  let sortedCars = Array.from(parking.keys()).sort((a, b) =>
    a.localeCompare(b),
  );
  console.log(sortedCars.join("\n"));
}
printPiccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
