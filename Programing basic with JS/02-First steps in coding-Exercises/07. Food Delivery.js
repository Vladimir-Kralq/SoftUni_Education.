function foodDelivery (broiChickenMenu,broiFishMenu,broiVeganMenu) {


let chickenMenu=10.35;
let fishMenu=12.40;
let veganMenu=8.15;


let totalChicken= broiChickenMenu * chickenMenu;
let totalFish = broiFishMenu *fishMenu;
let totalVegan = broiVeganMenu * veganMenu;


let totalMenu = totalChicken + totalFish + totalVegan;
let totalDesert = totalMenu *0.20;

let totalSum= totalMenu + totalDesert + 2.50;

console.log(totalSum);












}
foodDelivery (2,
4,
3
);