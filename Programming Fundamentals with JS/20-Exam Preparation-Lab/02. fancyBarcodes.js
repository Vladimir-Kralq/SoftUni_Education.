function fancyBarcodes(input) {
  let count = Number(input.shift());
  let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
  for (let i = 0; i < count; i++) {
    let barcode = input[i];
    let match = barcode.match(pattern);
    if (!match) {
      console.log("Invalid barcode");
    } else {
      let digitsPattern = /[0-9]/g;
      let digits = barcode.match(digitsPattern);
      if (digits) {
        console.log(`Product group: ${digits.join("")}`);
      } else {
        console.log(" Product group: 00");
      }
    }
  }
}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
