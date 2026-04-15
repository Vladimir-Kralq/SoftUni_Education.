function negativePositiveNumbers(numbers) {

const newArr=[];

for( let num of numbers){

if(num<0){
newArr.unshift(num);


}else{
    newArr.push(num);
}

}
console.log(newArr.join('\n'));




}
console.log(negativePositiveNumbers([7, -2, 8, 9]));
