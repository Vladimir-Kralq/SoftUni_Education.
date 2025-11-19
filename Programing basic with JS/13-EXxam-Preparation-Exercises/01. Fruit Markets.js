function fruitMarket(qgodiPrice, bananQuantity, portokalQuantity, maliniQuantity, qgodiQuantity) {
   
    let maliniPrice = qgodiPrice / 2;

   
    let orangesPrice = maliniPrice * 0.60;

   
    let bananPrice = maliniPrice * 0.20;

   
    let totalPrice = (qgodiPrice * qgodiQuantity) +
                     (maliniPrice * maliniQuantity) +
                     (orangesPrice * portokalQuantity) +
                     (bananPrice * bananQuantity);

   
    console.log(totalPrice.toFixed(2));
}
fruitMarket(63.5, 3.57, 6.35, 8.15, 2.5);