function pcStore(procesorPrice,videoKartaPrice,ramPrice,ramBroi,discount){

let dolar=1.57;

let levaProcesor= procesorPrice *dolar;
let levaVideoKarta = videoKartaPrice *dolar;
let levaRam= ramPrice * dolar;
let totalRam = levaRam * 2;


let totalProcesor= levaProcesor * 0.95;

let totalVideokarta= levaVideoKarta  *0.95;

let totalSum= totalProcesor + totalVideokarta + totalRam;


console.log(`Money needed - ${totalSum.toFixed(2)} leva.`);


}
pcStore(500, 200, 80, 2, 0.05);