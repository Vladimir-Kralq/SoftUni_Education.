function  movieDestination(budget,destenitaion,sesason,days){

let totalCost=0;
let priceDay=0;
if(sesason==='Winter')
{
   if(destenitaion==='Dubai')
    {
     priceDay= 45000;
    } 

    else if(destenitaion==='Sofia')
    {
        priceDay=17000;
    }
    else if(destenitaion==='London')
    {
        priceDay = 24000;
    }


}



if(sesason==='Summer')
{
   if(destenitaion==='Dubai')
    {
     priceDay= 40000;
    } 

    else if(destenitaion==='Sofia')
    {
        priceDay=12500;
    }
    else if(destenitaion==='London')
    {
        priceDay = 20250;
    }



}

       totalCost=priceDay * days;

       if(destenitaion==='Dubai')
       {
            totalCost *= 0.70;
       }
       else if(destenitaion==='Sofia')
       {
        totalCost *=1.25;

       }


if(budget >= totalCost)
{
    console.log(`The budget for the movie is enough! We have ${(budget-totalCost).toFixed(2)} leva left!`);
    
}
else
{
    console.log(`The director needs ${(totalCost-budget).toFixed(2)} leva more!"`);
    
}




}
movieDestination(400000, 'Sofia','Winter', 20);