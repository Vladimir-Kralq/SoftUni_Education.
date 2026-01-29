function printOrders(product, quantity) {
  
    function productPrice(item) {
    if (item === "coffee") return 1.5;
    if (item === "water") return 1.0;
    if (item === "coke") return 1.4;
    if (item === "snacks") return 2.0;

    return 0;
  }

  let unitPrice = productPrice(product);
  let totalPrice = unitPrice * quantity;

  console.log(totalPrice.toFixed(2));
}

printOrders("water", 5);
printOrders("coffee", 2);
