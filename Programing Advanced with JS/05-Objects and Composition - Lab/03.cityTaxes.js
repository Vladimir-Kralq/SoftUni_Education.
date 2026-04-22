function cityRecord(name, population, treasury) {
  const record = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percent) {
      this.population += Math.floor((this.population * percent) / 100);
    },
    applyRecession(percent) {
      this.treasury -= Math.ceil((this.treasury * percent) / 100);
    },
  };

  return record;
}
console.log(cityRecord("Tortuga", 7000, 15000));
