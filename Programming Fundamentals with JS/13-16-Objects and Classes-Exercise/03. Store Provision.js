function printStoreProvision(stock, delivery) {
  let products = {};

  for (let i = 0; i < stock.length; i += 2) {
    let product = stock[i];
    let qty = Number(stock[i + 1]);
    products[product] = qty;
  }

  for (let i = 0; i < delivery.length; i += 2) {
    let product = delivery[i];
    let qty = Number(delivery[i + 1]);

    if (products.hasOwnProperty(product)) {
      products[product] += qty;
    } else {
      products[product] = qty;
    }
  }

  for (let product in products) {
    console.log(`${product} -> ${products[product]}`);
  }
}
printStoreProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"],
);
