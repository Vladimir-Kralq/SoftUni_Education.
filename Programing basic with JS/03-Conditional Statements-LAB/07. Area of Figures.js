function areaOfFigures(vid,razmer,shirochina) {
    if (vid==="square")
    {
        let dalzhina=razmer * razmer;
        console.log(dalzhina.toFixed(3));
        
    }
    else if(vid==="rectangle")
    {
       let lice = razmer * shirochina;
       console.log(lice.toFixed(3));
       
    }
    else if(vid==="circle")
    {
       

        let radius = Math.PI*razmer*razmer;
        console.log(radius.toFixed(3));
        
    }
    else {

      
        let lice= (razmer*shirochina)/2;
        console.log(lice.toFixed(3));
        
    }
}














areaOfFigures("triangle",4.5,20
);