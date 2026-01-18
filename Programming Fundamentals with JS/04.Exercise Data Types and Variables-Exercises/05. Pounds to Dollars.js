function printPoundsToDollars(money) {
  const dollar = 1.31;
  let oneBritishPound = money * dollar;

  console.log(oneBritishPound.toFixed(3));
}
printPoundsToDollars(39);
