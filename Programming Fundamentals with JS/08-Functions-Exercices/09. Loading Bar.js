function loadingBar(number) {
    let percentCount = number / 10;
    let dotsCount = 10 - percentCount;

    let bar = "[" + "%".repeat(percentCount) + ".".repeat(dotsCount) + "]";

    if (number === 100) {
        console.log("100% Complete!");
        console.log(bar);
    } else {
        console.log(`${number}% ${bar}`);
        console.log("Still loading...");
    }
}
loadingBar(30);