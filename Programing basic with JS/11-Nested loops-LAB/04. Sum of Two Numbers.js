function combinations(start,end,magicNum){

let combinationsCounter=0;
let combinationsFound=false;

for(let i=start; i<=end; i++)
{
    
 for(let j=start; j<=end; j++)
 {
  
  combinationsCounter++
  let sum=i+j;
  
   if(sum===magicNum)
   {
    combinationsFound=true;
    console.log(`Combination N:${combinationsCounter} (${i} + ${j} = ${magicNum})`);
    break;
    
   }

 }

 if(combinationsFound)
 {
   break;
 }
 if(!combinationsFound)

{
    console.log(`Combination N:${combinationsCounter} (${i} + ${j} = ${magicNum})`);
    
}

}



}

combinations(1, 10, 5);