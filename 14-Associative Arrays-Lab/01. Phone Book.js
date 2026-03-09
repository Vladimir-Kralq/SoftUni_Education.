function printPhoneBook(data) {
  let phoneBook = {};
  for (emtry of data) {
    let parts = emtry.split(" ");

    let [name, number] = parts;
    phoneBook[name] = number;
  }

  for (let key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}
printPhoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
