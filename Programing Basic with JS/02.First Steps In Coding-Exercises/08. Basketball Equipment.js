function  basketballEquipment (yearTax) {
let year = yearTax;
let basketKec = yearTax - yearTax * 0.40
let basketEkip= basketKec - basketKec * 0.20
let basketBall = basketEkip /4;
let accesoaries = basketBall /5;

let total=  yearTax + basketKec + basketEkip + basketBall + accesoaries;

console.log(total);














}

basketballEquipment (365);