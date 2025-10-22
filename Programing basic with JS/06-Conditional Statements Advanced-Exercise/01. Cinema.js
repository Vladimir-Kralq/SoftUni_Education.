function cinema(project, row, columns) {
  let premiere = 12.0;
  let normal = 7.5;
  let discount = 5.0;
  let total = 0;

  if (project === "Premiere") {
    total = row * columns * premiere;
  } else if (project === "Normal") {
    total = row * columns * normal;
  } else if (project === "Discount") {
    total = row * columns * discount;
  }
  console.log(`${total.toFixed(2)} leva`);
}

cinema("Premiere", 10, 12);
