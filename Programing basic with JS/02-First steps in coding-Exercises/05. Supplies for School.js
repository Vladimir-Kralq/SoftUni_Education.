function supplSchool(paketPencil, paketMarkeri, preparat,namalenie) {
  let himikali = 5.8;
  let markeri = 7.2;
  let preparatLitar = 1.2;

  let sum =
    himikali * paketPencil + markeri * paketMarkeri + preparatLitar * preparat;
  let total = sum - (sum * namalenie/100) ;
  console.log(total);
}

supplSchool(2, 3, 4, 25);
