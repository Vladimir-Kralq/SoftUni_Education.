function  repainting (quantityNailon,quantityBoi,quantityRazreditel,hours) {

let nailon=1.50;
let boia=14.50;
let razreditelBoia=5;
let torbicki=0.40;

let nailonSum= (quantityNailon+ 2 ) * nailon ;
let sumBoia = (quantityBoi + quantityBoi * 0.10) * boia;
let sumRazreditel = quantityRazreditel *razreditelBoia;

let totalMaterial = nailonSum + sumBoia + sumRazreditel +torbicki;
let maistorSum= (totalMaterial * 0.30)* hours;

let sum= totalMaterial + maistorSum;
console.log(sum);













}

repainting(10,
11,
4 ,
8
);