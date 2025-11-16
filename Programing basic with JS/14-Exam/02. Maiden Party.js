function maidenParty(partyPrice, loveMsgsCount, rosesCount, keysCount, caricaturesCount, lucksCount) {
   
    const priceLoveMsg = 0.60;
    const priceRose = 7.20;
    const priceKey = 3.60;
    const priceCaricature = 18.20;
    const priceLuck = 22.00;
    const hostingFeeRate = 0.10; 
    const discountRate = 0.35; 

 
    let totalRevenue = (loveMsgsCount * priceLoveMsg) +
                       (rosesCount * priceRose) +
                       (keysCount * priceKey) +
                       (caricaturesCount * priceCaricature) +
                       (lucksCount * priceLuck);

    let totalItems = loveMsgsCount + rosesCount + keysCount + caricaturesCount + lucksCount;

 
    let discount = 0;
    if (totalItems >= 25) {
        discount = totalRevenue * discountRate;
    }

  
    let totalAfterDiscount = totalRevenue - discount;

  
    let hostingFee = totalAfterDiscount * hostingFeeRate;

  
    let totalProfit = totalAfterDiscount - hostingFee;

   
    if (totalProfit >= partyPrice) {
        let moneyLeft = totalProfit - partyPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = partyPrice - totalProfit;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}


maidenParty(40.8, 20, 25, 30, 50, 10);
