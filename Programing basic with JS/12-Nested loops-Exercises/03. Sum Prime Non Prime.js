function sumPrime(input) {
  let primeSum = 0;
  let nonPrimeSum = 0;

  let index = 0;

  while (input[index] !== "stop") {
    let currentNum = Number(input[index]);

    if (currentNum < 0) {
      console.log(`Number is negative.`);
      index++;
      continue;
    }

    let isPrime = currentNum > 1;

    for (let i = 2; i <= Math.sqrt(currentNum); i++) {
      if (currentNum % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeSum += currentNum;
    } else {
      nonPrimeSum += currentNum;
    }

    index++;
  }

  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrime(["3", "9", "0", "7", "19", "4", "stop"]);
