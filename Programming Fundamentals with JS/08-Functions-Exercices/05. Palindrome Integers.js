function printArePolidromIntegers(numbers) {
  function isPalidromInteger(num) {
    let numString = num.toString();

    let reversed = numString.split("").reverse().join("");

    return numString === reversed;
  }

  for (let number of numbers) {
    console.log(isPalidromInteger(number));
  }
}
printArePolidromIntegers([123, 323, 421, 121]);
