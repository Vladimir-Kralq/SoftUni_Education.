function printDistinct(numbers){

let newArr = [];

for(let number of numbers){
    if(!newArr.includes(number)){
        newArr.push(number);
    }
}

console.log(newArr.join(' '));
}

printDistinct([1, 2, 3, 4, 2, 3]);
