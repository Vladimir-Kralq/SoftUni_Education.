function fruit(type, weightInGrams, price) {
  let weightCalc = weightInGrams / 1000;
  let sum = weightCalc * price;

  return `I need $${sum.toFixed(2)} to buy ${weightCalc.toFixed(2)} kilograms ${type}.`;
}
console.log(fruit("orange", 2500, 1.8));
