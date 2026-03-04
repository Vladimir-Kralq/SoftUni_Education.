function printInventory(arr) {
  let hero = [];

  for (let line of arr) {
    let parts = line.split(" / ");
    let name = parts[0];
    let level = Number(parts[1]);
    let items = parts[2] ? parts[2].split(", ") : [];

    let heroObj = {
      name: name,
      level: level,
      items: items,
    };
    hero.push(heroObj);
  }

  hero.sort((a, b) => a.level - b.level);

  for (let h of hero) {
    console.log(`Hero: ${h.name}`);
    console.log(`level => ${h.level}`);
    console.log(`items => ${h.items.join(", ")}`);
  }
}
printInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
