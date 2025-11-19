function easterBattle(input) {
    let firstPlayerEggs = input[0];
    let secondPlayerEggs = input[1];

    let index = 2; 
    let winner = '';

    while (input[index] !== 'End') {
        if (input[index] === 'one') {
            secondPlayerEggs--; 
            if (secondPlayerEggs === 0) {
                console.log(`Player one wins! Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
                return;
            }
        } else if (input[index] === 'two') {
            firstPlayerEggs--; 
            if (firstPlayerEggs === 0) {
                console.log(`Player two wins! Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
                return; 
            }
        }
        index++;
    }

    
    console.log(`Player one has ${firstPlayerEggs} eggs left.`);
    console.log(`Player two has ${secondPlayerEggs} eggs left.`);
}

easterBattle([5, 4, 'one', 'two', 'one', 'two', 'two', 'End']);
