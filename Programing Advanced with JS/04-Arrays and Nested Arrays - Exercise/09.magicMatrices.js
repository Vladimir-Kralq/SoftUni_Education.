function magicMatrices(arr){
let rowSum=[];
let cowSum=[];
for(let i = 0; i < arr.length; i++){
    let row=arr[i];
    let sum= row.reduce((result,current)=> (result+current),0);
    rowSum.push(sum);
}


for(let i = 0; i < arr.length; i++){
    let row=arr[i];
    let newRow=[];
    for(let j = 0; j < arr.length; j++){
        newRow.push(row[j][i]);
    }   
}




return rowSum;




}

console.log(magicMatrices([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]
));
