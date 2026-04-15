function pieceOfPie(pies, startPie, endPie) {
  const startIndex = pies.indexOf(startPie); //1
  const endIndex = pies.indexOf(endPie); //3
  let result = pies.slice(startIndex, endIndex + 1);

  return result;
}
console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie",
  ),
);
