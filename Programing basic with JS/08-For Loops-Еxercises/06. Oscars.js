function oscars(input) {
  const imeNaAktora = input[0];

  let obshtiTochki = parseFloat(input[1]);

  const broiOtsenyavashti = parseInt(input[2]);

  const prag = 1250.5;

  let tekushtIndex = 3;

  for (let i = 0; i < broiOtsenyavashti; i++) {
    if (obshtiTochki >= prag) {
      break;
    }

    const imeNaOtsenyavashtiya = input[tekushtIndex];
    tekushtIndex++;

    const tochkiOtOtsenyavashtiya = parseFloat(input[tekushtIndex]);
    tekushtIndex++;

    const dalzhinaNaImeto = imeNaOtsenyavashtiya.length;
    const dobaveniTochki = (dalzhinaNaImeto * tochkiOtOtsenyavashtiya) / 2;

    obshtiTochki += dobaveniTochki;
  }

  if (obshtiTochki >= prag) {
    console.log(
      `Congratulations, ${imeNaAktora} got a nominee for leading role with ${obshtiTochki.toFixed(
        1
      )}!`
    );
  } else {
    const nuzhniTochki = prag - obshtiTochki;

    console.log(
      `Sorry, ${imeNaAktora} you need ${nuzhniTochki.toFixed(1)} more!`
    );
  }
}

oscars([
  "Zahari Baharov",
  "205",
  4,
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
