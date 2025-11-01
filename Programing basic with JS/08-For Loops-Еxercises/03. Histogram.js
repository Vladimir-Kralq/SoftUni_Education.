function histogram(array){
let n = array[0];
let p1=0; p2=0; p3=0; p4=0; p5=0;


    for(let i = 1; i<=n; i++)
{
    let currentNum= array[i];

    if(currentNum<200) p1++;
    else if (currentNum<400) p2++;
    else if(currentNum<600) p3++;
    else if(currentNum<800) p4++;
    else p5++;


}
console.log(`${(p1/n * 100).toFixed(2)}%`);
console.log(`${(p2/n * 100).toFixed(2)}%`);
console.log(`${(p3/n * 100).toFixed(2)}%`);
console.log(`${(p4/n * 100).toFixed(2)}%`);
console.log(`${(p5/n * 100).toFixed(2)}%`);









}
histogram(([3,
1,
2,
999])
);