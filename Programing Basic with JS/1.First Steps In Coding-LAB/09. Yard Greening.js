function  yardGreening (kvMetri){
let kvMetriCena=7.61;
let totalCenakvM=kvMetri*kvMetriCena;
let discount= totalCenakvM*0.18;

let total = totalCenakvM-discount;

console.log(`The final price is: ${total} lv.`);
console.log(`The discount is: ${discount} lv.`);









}
yardGreening(550);
