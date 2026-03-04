function printEmployees(dataArr) {
  let emploees = [];

  for (let name of dataArr) {
    let employee = {
      name: name,
      personalNum: name.length,
    };
    emploees.push(employee);
  }
  for (let emp of emploees) {
    console.log(`Name: ${emp.name} -- Personal Number: ${emp.personalNum}`);
  }
}
printEmployees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
