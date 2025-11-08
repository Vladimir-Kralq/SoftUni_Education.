function cake(input) {
    
const width=Number(input[0]);
const lenght= Number(input[1]);
let guestTake=0;
const totalPieces= width*lenght;
let index=2;


while (input[index]!=='STOP' && index < input.length) 
{
    guestTake+=Number(input[index++]);

    if(guestTake>totalPieces)
    {
         break;
    }
}
const diff= Math.abs(totalPieces-guestTake);

if(guestTake>totalPieces)
{
    console.log(`No more cake left! You need ${diff} pieces more.`);
    

 
}
else{
     console.log(`${diff} pieces are left. `);
}




}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);

