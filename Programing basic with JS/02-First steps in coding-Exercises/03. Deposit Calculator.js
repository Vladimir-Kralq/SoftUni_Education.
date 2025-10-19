function calculator(depositSum, srok, yearProcent) {
  let godisnaLixva = depositSum * (yearProcent / 100);
  let mesecnaLixva = godisnaLixva / 12;
  let sum = depositSum + srok * mesecnaLixva;

  console.log(sum);
}

calculator(200, 3, 5.7);
