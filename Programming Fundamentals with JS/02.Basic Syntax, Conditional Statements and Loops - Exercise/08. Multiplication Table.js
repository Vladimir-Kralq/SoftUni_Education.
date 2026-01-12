function multiplicationTable(number) {
  for (let i = number; i <= number; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
  }
}
multiplicationTable(2);
