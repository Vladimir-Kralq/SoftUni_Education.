function printConvertDistance(meters){

const kilometers=meters / 1000;
const oneMile=0.621371;
const miles= kilometers *oneMile;




console.log(`${meters} meters is equal to ${kilometers} kilometers.`);
console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);








}
printConvertDistance(1852);