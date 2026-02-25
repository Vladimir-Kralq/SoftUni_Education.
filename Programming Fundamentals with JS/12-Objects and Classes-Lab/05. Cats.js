function printCats(catDatAarr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      return `${this.name}, age ${this.age} says Meow`;
    }
  }

  for (let catData of catDatAarr) {
    let parseData = catData.split(" ");

    let name = parseData[0];
    let age = parseData[1];

    let cat = new Cat(name, age);
    console.log(cat.meow());
  }
}
printCats(["Mellow 2", "Tom 5"]);
