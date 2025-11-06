function maxNum(input) {
    let index = 0;
    let current = input[index];
    let biggestNum = Number.MIN_SAFE_INTEGER; 

    while (current !== "Stop") {
        let currentNum = Number(current);
        if (currentNum > biggestNum) {
            biggestNum = currentNum;
        }
        index++;
        current = input[index];
    }

    console.log(biggestNum);
}

maxNum(["100", "99", "80", "70", "Stop"]);
