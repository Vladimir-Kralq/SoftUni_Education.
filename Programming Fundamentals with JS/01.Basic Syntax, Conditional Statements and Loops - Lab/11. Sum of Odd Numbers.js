function sumOfOddNumbers(n){
let printedNumbers = 0;
let currentNumber = 1;
let sum =0;
    while(printedNumbers<n)
    {
console.log(currentNumber);
currentNumber +=2;
printedNumbers++;
sum += currentNumber -2;

    }

console.log(`Sum: ${ sum}`);





}
sumOfOddNumbers(5);