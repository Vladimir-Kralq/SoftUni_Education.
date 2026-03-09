function printSchoolGrades(data) {
  let map = new Map();

  for (let entry of data) {
    let tokens = entry.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);

    if (map.has(name)) {
      let currentGrades = map.get(name);

      map.set(name, currentGrades.concat(grades));
    } else {
      map.set(name, grades);
    }
  }

  let sortedNames = Array.from(map.keys()).sort((a, b) => a.localeCompare(b));

  for (let name of sortedNames) {
    let grades = map.get(name);
    let sum = 0;

    for (let grade of grades) {
      sum += grade;
    }

    let average = sum / grades.length;

    console.log(`${name}: ${average.toFixed(2)}`);
  }
}
printSchoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
