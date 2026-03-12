function printCompanyUsers(arr) {
  let company = new Map();
  for (let line of arr) {
    let [companyName, employeeId] = line.split(" -> ");
    if (!company.has(companyName)) {
      company.set(companyName, []);
    }

    let employees = company.get(companyName);
    if (!employees.includes(employeeId)) {
      employees.push(employeeId);
    }
  }

  let sorted = Array.from(company.entries()).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  for (let [company, employees] of sorted) {
    console.log(company);
    for (let employee of employees) {
      console.log(`-- ${employee}`);
    }
  }
}
printCompanyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
