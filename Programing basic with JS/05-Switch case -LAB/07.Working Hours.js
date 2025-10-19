function workingTime (chas , workingDay){

if(chas>=10 && chas<=18){
switch (workingDay){

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
    console.log("open");
    break;
    default:
        console.log("closed");
        break;
    
}
}else {
    console.log("closed");
    
}
}
workingTime(19,
"Friday"
);
