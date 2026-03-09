function adressBook(input) {
  let addressBook = {};

  for (let line of input) {
    let [name, address] = line.split(":");

    addressBook[name] = address;
  }

  let sortedEntries = Object.entries(addressBook);

  sortedEntries.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, address] of sortedEntries) {
    console.log(`${name} -> ${address}`);
  }
}

adressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
