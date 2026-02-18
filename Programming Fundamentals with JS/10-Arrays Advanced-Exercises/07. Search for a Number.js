function searchNumber(arr1, arr2) {
  let takeCount = arr2[0];
  let deleteCount = arr2[1];
  let searchedNumber = arr2[2];

  let result = arr1.slice(0, takeCount);

  result.splice(0, deleteCount);

  let count = 0;

  for (let num of result) {
    if (num === searchedNumber) {
      count++;
    }
  }

  console.log(`Number ${searchedNumber} occurs ${count} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
