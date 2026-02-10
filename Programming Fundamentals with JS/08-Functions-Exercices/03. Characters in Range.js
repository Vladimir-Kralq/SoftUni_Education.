function characterInRange(char1,char2){

 function getSmallerNum(num1, num2) {
    return num1 < num2 ? num1 : num2;
  }


function getBiggerNum(num1, num2) {
    return num1 >  num2 ? num1 : num2;
  }


function returnRenge(start,end){
    let result=[];
for(let i = start + 1; i< end; i ++){
    let char=String.fromCharCode(i);
    result.push(char);

}
return result;
}

let code1=char1.charCodeAt(0);
let code2=char2.charCodeAt(0);

let start=getSmallerNum(code1,code2); 
let end = getBiggerNum(code1,code2);

let result= returnRenge(start,end)
console.log(result.join(' '));




}
characterInRange('a','d');