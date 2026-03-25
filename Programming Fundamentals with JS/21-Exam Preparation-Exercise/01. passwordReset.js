function passwordReset(input){

let pass=input.shift();


for(let line of input){
    if(line==='done')break;

    let[command,...args]=line.split(' ')



switch(command){
case 'TakeOdd':
    let newPass='';
    for(let i=1; i<pass.length;i+=2){
        newPass+=pass[i];
    }
    pass=newPass;
    console.log(pass);
    break;
case 'Cut':
    let index=Number(args[0]);
    let length=Number(args[1]);
    let substring=pass.substring(index,index+length);
    pass=pass.replace(substring,'');
    console.log(pass);
    break;

case'Substitute':
    
let subs=args[0];
let replcement=args[1];

if(pass.includes(subs)){
    let regex= new RegExp(subs,'g');
    pass=pass.replace(regex,replcement);
    console.log(pass);
    
}else{
    console.log('Nothing to replace!');
    
}
break;



}

    
}

console.log(`Your password is: ${pass}`);










}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
);