function printCity(city) {
  let entries = Object.keys(city);

  for (let key of entries) {
    let value = city[key];

    console.log(`${key} -> ${value}`);
  }
}
printCity({
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
});
