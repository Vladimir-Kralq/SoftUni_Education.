function shop (budget,videokartiBroi,procesoriBroi,ram){

    let videokartPrice=250;
   let totalVideo= videokartiBroi * videokartPrice;
   let procesorPrice= totalVideo*0.35;
   let ramPrice= totalVideo * 0.10;
   let totalSun= totalVideo + procesorPrice*procesoriBroi+ramPrice*ram;
if(videokartiBroi>procesoriBroi)
{
    totalSun*=0.85
    
}
if (budget >= totalSun) {
  console.log(`You have ${(budget - totalSun).toFixed(2)} leva left!`);
} else {
  console.log(`Not enough money! You need ${(totalSun - budget).toFixed(2)} leva more!`);
}









}


shop(900,
2,
1,
3
);