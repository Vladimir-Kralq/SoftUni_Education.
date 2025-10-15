function fishTank(dalzhina, shirochina, visocina, procent) {
  let obem = dalzhina * shirochina * visocina;
  let obemLitri = obem * 0.001;

  let zaetoMiasto = procent / 100;

  let nuzniLitri = obemLitri * (1 - zaetoMiasto);
  console.log(nuzniLitri);
}

fishTank(85, 75, 47, 17);
