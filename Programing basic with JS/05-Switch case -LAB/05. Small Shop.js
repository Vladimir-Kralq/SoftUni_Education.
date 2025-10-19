function smallShop (product,city,quantity){
    let coffee=0;
    let water=0;
    let beer=0;
    let sweets =0;
    let peanuts=0;
if(city==="Sofia")
{
    coffee=0.50 ;
   
    water=0.80 ;
    
    beer=1.20 ;
    
    sweets  = 1.45 ;
    
    peanuts=1.60 ;
   
    
}
else if (city==="Plovdiv")
{
   coffee=0.40 ;
   
    water=0.70 ;
    beer=1.15 ;
    sweets  = 1.30 ;
    peanuts=1.50 ;
}

else if (city==="Varna")
{
   coffee=0.45 ;
    water=0.70;
    beer=1.10 ;
    sweets  = 1.35 ;
    peanuts=1.55 ;
}
let total = 0;


if(product==="coffee") {
    total= coffee *quantity;
}
else if(product==="water"){
    total = water *quantity;
}
else if (product==="beer")
{
    total = beer *quantity
}
else if (product==="sweats")
{
    total = sweets  *quantity
}
else if (product==="peanuts")
{
    total = peanuts *quantity
}

console.log(total);












}
smallShop(	
	"beer",
"Sofia",
2

);