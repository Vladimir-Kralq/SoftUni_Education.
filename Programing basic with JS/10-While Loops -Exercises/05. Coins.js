function coins(input) {
  let money = Math.round(Number(input) * 100); // обръщаме в стотинки
  let coinsCount = 0;

  while (money > 0) {
    if (money >= 200) {
      money -= 200;
    } else if (money >= 100) {
      money -= 100;
    } else if (money >= 50) {
      money -= 50;
    } else if (money >= 20) {
      money -= 20;
    } else if (money >= 10) {
      money -= 10;
    } else if (money >= 5) {
      money -= 5;
    } else if (money >= 2) {
      money -= 2;
    } else if (money >= 1) {
      money -= 1;
    }

    coinsCount++;
  }

  console.log(coinsCount);
}
coins(1.23);
