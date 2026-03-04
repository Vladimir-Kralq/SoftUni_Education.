function printTowns(arr){


for (let row of arr){
let [town, lat, long] = row.split(" | ");

let obj={
town:town,
latitude: Number(lat).toFixed(2),
longitude:Number(long).toFixed(2)

}
console.log(obj);

}








}
printTowns([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);