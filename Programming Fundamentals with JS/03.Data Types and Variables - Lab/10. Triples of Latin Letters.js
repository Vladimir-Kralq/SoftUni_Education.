function solve(n) {
    let number = Number(n);
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < number; i++) {
        let result = '' + alphabet[i];

        for (let j = 0; j < number; j++) {
            let secondResult = result + alphabet[j];

            for (let k = 0; k < number; k++) {
                let thirdResult = secondResult + alphabet[k];
                console.log(thirdResult);
            }
        }
    }
}

solve('3');
