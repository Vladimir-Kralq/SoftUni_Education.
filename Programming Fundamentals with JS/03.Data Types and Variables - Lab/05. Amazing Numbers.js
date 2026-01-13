function printAmazingNumbers(number) {
    let stringNumber = String(number);
    let totalSum = 0;

    for (let i = 0; i < stringNumber.length; i++) {
        totalSum += Number(stringNumber[i]);
    }

    let sumAsString = String(totalSum);
    let isAmazing = false;

    for (let j = 0; j < sumAsString.length; j++) {
        if (sumAsString[j] === '9') {
            isAmazing = true;
            break;
        }
    }

    console.log(`${number} Amazing? ${isAmazing ? 'True' : 'False'}`);
}

printAmazingNumbers(1233);
printAmazingNumbers(999);
