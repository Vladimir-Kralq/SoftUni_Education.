function printStorage(data) {
  let map = new Map();

  for (let entry of data) {
    let [item, quantity] = entry.split(" ");
    quantity = Number(quantity);

    if (map.has(item)) {
      let currentQuantity = map.get(item);
      let newQuantity = currentQuantity + quantity;
      map.set(item, newQuantity);
    } else {
      map.set(item, quantity);
    }
  }

  for (let [key, value] of map.entries()) {
    console.log(`${key} -> ${value}`);
  }
}
printStorage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
