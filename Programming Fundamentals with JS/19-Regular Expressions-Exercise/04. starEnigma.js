function starEnigma(input){

    let n = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];

   
    const pattern = /@([A-Za-z]+)[^@\-!:>]*:(\d+)[^@\-!:>]*!([AD])![^@\-!:>]*->(\d+)/;

    for (let i = 0; i < n; i++) {
        let encryptedMessage = input[i];
        
      
        let keyMatch = encryptedMessage.match(/[star]/gi);
        let key = keyMatch ? keyMatch.length : 0;

      
        let decryptedMessage = '';
        for (let char of encryptedMessage) {
            let newChar = String.fromCharCode(char.charCodeAt(0) - key);
            decryptedMessage += newChar;
        }

  
        let match = pattern.exec(decryptedMessage);
        if (match) {
            let planetName = match[1];
            let attackType = match[3];

            if (attackType === 'A') {
                attackedPlanets.push(planetName);
            } else if (attackType === 'D') {
                destroyedPlanets.push(planetName);
            }
        }
    }

  
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

 
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(p => console.log(`-> ${p}`));
    
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(p => console.log(`-> ${p}`));
}












starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']
);