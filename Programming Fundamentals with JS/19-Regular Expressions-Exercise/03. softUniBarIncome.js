function softUniBarIncome(input) {
  let totalIncome = 0;

  const pattern =
    /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|(\d+)\|[^|$%.]*?(\d+(?:\.\d+)?)\$/;

  for (let line of input) {
    if (line === "end of shift") break;

    let match = line.match(pattern);
    if (match) {
      let name = match[1];
      let product = match[2];
      let qty = Number(match[3]);
      let price = Number(match[4]);

      let totalPrice = qty * price;
      totalIncome += totalPrice;

      console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
