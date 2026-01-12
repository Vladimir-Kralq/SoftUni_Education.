function roundToNearestHalf(roundNum, precisionNum) {

if(precisionNum>15)
{
    precisionNum=15;
    
}
let rounded = roundNum.toFixed(precisionNum);

console.log(parseFloat(rounded));









}
roundToNearestHalf(10.5,3);