function toyShop (cena, puzzels,dolls,bears,minions,trucks){


let puzzelszaBroi=2.60;
let dollszaBroi=3;
let bearsZaBroi=4.10;
let minionsZaBroi=8.20;
let trucksZaBroi=2;
let broiIgracki= puzzels + dolls +bears +minions + trucks;
let discount=0;

 
let moneyEarn= puzzels* puzzelszaBroi+ dolls*dollszaBroi+bears*bearsZaBroi+minions*minionsZaBroi+trucks*trucksZaBroi;

 if (broiIgracki >= 50) {
    moneyEarn = moneyEarn  * 0.75;
  }

let naem=moneyEarn*0.10;

let total=moneyEarn-naem;

if(total>=cena)
{
    console.log(`Yes! ${(total-cena).toFixed(2)} lv left.`);
    
}
else{
    console.log(`Not enough money! ${(cena-total).toFixed(2)} lv needed.`);
    
}







}

toyShop(40.8,
20,
25,
30,
50,
10
);