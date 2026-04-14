function roadRadar(speed,area){

let motorway=130;
let interstate=90;
let city=50;
let residential=20;



switch(area){
    case'motorway':
    if(speed <= motorway){
    console.log(`Driving ${speed} km/h in a ${motorway} zone`); 
    }else{
        let diff=speed-motorway;
        let status= diff <=20 ? 'speeding' : diff <=40 ? 'excessive speeding' : 'reckless driving';
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorway} - ${status}`);
        
    }
    break;

    case'interstate':

    if(speed <= interstate){
    console.log(`Driving ${speed} km/h in a ${interstate} zone`); 
    }else{
        let diff=speed-interstate;
        let status= diff <=20 ? 'speeding' : diff <=40 ? 'excessive speeding' : 'reckless driving';
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstate} - ${status}`);
        
    }
    break;

    case'city':
    
    if(speed <= city){
    console.log(`Driving ${speed} km/h in a ${city} zone`); 
    }else{
        let diff=speed-city;
        let status= diff <=20 ? 'speeding' : diff <=40 ? 'excessive speeding' : 'reckless driving';
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${city} - ${status}`);
        
    }
    break;

    case'residential':

     if(speed <= residential){
    console.log(`Driving ${speed} km/h in a ${residential} zone`); 
    }else{
        let diff=speed-residential;
        let status= diff <=20 ? 'speeding' : diff <=40 ? 'excessive speeding' : 'reckless driving';
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residential} - ${status}`);
        
    }
    break;

}


}
roadRadar(40, 'city');
  