function worldRecor(recordSecond,razstoianieMetri,timesSecond){

let prepluva= razstoianieMetri * timesSecond;

let addTime=Math.floor(razstoianieMetri / 15) * 12.5;
let totalTime= prepluva + addTime

if(recordSecond>totalTime)
{
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    
}
else{
    console.log(`No, he failed! He was ${(totalTime-recordSecond).toFixed(2)} seconds slower.`);
    
}














}
worldRecor(55555.67,
3017,
5.03

);