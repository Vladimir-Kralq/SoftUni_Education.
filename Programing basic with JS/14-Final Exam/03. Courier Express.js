function courierExpress (teglo,tipUsluga,km){

let cenaKm=0;
let finalPrice=0;
let cenaKmStandard=0; 


if(teglo < 1 )
{
    cenaKmStandard = 0.03; 
}
else if(teglo <= 10)
{
    cenaKmStandard = 0.05; 
}
else if(teglo <= 40)
{
    cenaKmStandard = 0.10; 
}
else if(teglo <= 90)
{
    cenaKmStandard = 0.15; 
}
else if(teglo <= 150)
{
    cenaKmStandard = 0.20; 
}


if(tipUsluga==='standard')
{
    
    cenaKm = cenaKmStandard;
    finalPrice = cenaKm * km;
}


if(tipUsluga==='express')
{
    let nadcenkaNaKm = 0; 

   
    if(teglo < 1 )
    {
        
        nadcenkaNaKm = cenaKmStandard * 0.80 * teglo;
    }
    else if(teglo <= 10)
    {
       
        nadcenkaNaKm = cenaKmStandard * 0.40 * teglo;
    }
    else if(teglo <= 40)
    {
       
        nadcenkaNaKm = cenaKmStandard * 0.05 * teglo;
    }
    else if(teglo <= 90)
    {
        
        nadcenkaNaKm = cenaKmStandard * 0.02 * teglo;
    }
    else if(teglo <= 150)
    {
        
        nadcenkaNaKm = cenaKmStandard * 0.01 * teglo;
    }

   
    finalPrice = (cenaKmStandard + nadcenkaNaKm) * km;
}


console.log(`The delivery of your shipment with weight of ${teglo.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`);

}

courierExpress(1.5,
'standard',
100
)