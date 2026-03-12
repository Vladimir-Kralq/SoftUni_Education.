function printMiningInfo(arr){
let resources=new Map();
for(let i=0; i<arr.length;i+=2){
let resource=arr[i];
let quantity=Number(arr[i+1]);
resources.set(resource, (resources.get(resource)||0)+quantity);

}

for(let [resource,quantity] of resources){
    console.log(`${resource} -> ${quantity}`);
    
}








}
printMiningInfo([
'Gold',
'155',
'Silver',
'10',
'Copper',
'17'
]
);