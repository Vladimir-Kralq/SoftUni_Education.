function printSubstring(search,sentence){

let words=sentence.toLowerCase().split(" ");

if(words.includes(search)){ 
console.log(search);

}else{
    console.log(`${search} not found!`);
    
}





}
printSubstring('javascript',
'JavaScript is the best programming language'
);