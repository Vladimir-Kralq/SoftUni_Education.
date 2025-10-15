function godzilaVsKong(budget,statisti,oblekloPrice){
let dekor = budget*0.10;


if(statisti>150)
{
    oblekloPrice *= 0.90;
}
let totalCost = dekor + (statisti * oblekloPrice);
if(totalCost>budget )
{
    console.log("Not enough money!");
    console.log(`Wingard needs ${((totalCost-budget)).toFixed(2)} leva more.`);
    
}
else if(totalCost<=budget  )
{
    console.log("Action!");
    console.log(`Wingard starts filming with ${(budget-totalCost).toFixed(2)} leva left.`);

}












}

godzilaVsKong(15437.62,
186,
57.99

);