function printFactorialDivision(num1, num2) {


    function factorial(num) {
    let result = 1;

for (let i = 2; i <= num; i++) {
result *= i;
    }
return result;
}
let devisionResult = factorial(num1) / factorial(num2);
console.log(devisionResult.toFixed(2));

}

printFactorialDivision(5, 2);