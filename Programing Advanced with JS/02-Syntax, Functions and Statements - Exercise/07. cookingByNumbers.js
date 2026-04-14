function cookingByNumbers(num, chop, dice, spice, bake, fillet) {
  let currentNum = Number(num);
  let operations = [chop, dice, spice, bake, fillet];

  const actions = {
    chop: (n) => n / 2,
    dice: (n) => Math.sqrt(n),
    spice: (n) => n + 1,
    bake: (n) => n * 3,
    fillet: (n) => n * 0.8,
  };

  for (let op of operations) {
    currentNum = actions[op](currentNum);
    console.log(currentNum);
  }
}

// Тест
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
