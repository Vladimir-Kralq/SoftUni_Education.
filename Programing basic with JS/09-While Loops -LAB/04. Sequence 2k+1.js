function sequence(number) {
  let k = 1;

  while (k <= number) {
    console.log(k);
    k = 2 * k + 1;
  }
}
sequence(3);
