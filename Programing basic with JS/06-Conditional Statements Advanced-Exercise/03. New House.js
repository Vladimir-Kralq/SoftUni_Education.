function newHouse (vid,broi,budget){

let rose=5;
let dalia=3.80;
let lale = 2.80;
let narcis=3;
let gladio=2.50;
let total=0;

if (vid === "Roses") {
    let totalRose = rose * broi;
    if (broi > 80) {
        totalRose *= 0.90; // 10% отстъпка
    }
    total = totalRose;
}

else if( vid==='Dahlias' && broi>90)
{
    let totalDalia= dalia *broi;
    total = totalDalia * 0.85;
}
else if ( vid==='Tulips'&& broi>80)
{
    let totalLale=lale*broi;
   total = totalLale * 0.85;

}
else if ( vid==='Narcissus'&& broi<120)
{
    let totalNacris=narcis * broi;
    total = totalNacris * 1.15;
}
else if ( vid===`Gladiolus`&&  broi<80)
{
    let gladioTotal= gladio *broi;
    total =gladioTotal *1.20;
}

if(budget>total)
{
    console.log(`Hey, you have a great garden with ${broi} ${vid} and ${ (budget-total).toFixed(2)} leva left.`);
    
}
else 
    {
        console.log(`Not enough money, you need ${(total-budget).toFixed(2)} leva more.`);
        
    }









}
newHouse("Roses",
55,
250
);