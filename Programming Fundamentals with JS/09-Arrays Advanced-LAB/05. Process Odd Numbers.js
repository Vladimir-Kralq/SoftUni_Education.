function processOddNumbers(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i] * 2);
    }

    result.reverse();

    console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
