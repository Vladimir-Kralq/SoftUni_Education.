function printNxNMatrix(number) {
  for (let i = 0; i < number; i++) {
    let currentRow = [];
    for (let j = 0; j < number; j++) {
      currentRow.push(number);
    }
    console.log(currentRow.join(" "));
  }
}
printNxNMatrix(3);
