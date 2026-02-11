function listOfProducts(arr) {
    arr.sort();

    let mapped = arr.map((product, index) => {
        return `${index + 1}.${product}`;
    });

    for (let item of mapped) {
        console.log(item);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
