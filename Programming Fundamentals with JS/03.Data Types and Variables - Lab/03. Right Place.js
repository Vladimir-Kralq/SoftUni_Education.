function printRightPlace(word,symbol,check){

let result=word.replace('_', symbol);


if(result===check){
console.log('Matched');


}else{
    console.log('Not Matched');
    
}









}
printRightPlace('Str_ng', 'I', 'Strong');