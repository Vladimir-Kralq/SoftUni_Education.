function sortBy2Criteria(arr) {
  let sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  return sortedArr.join("\n");
}

console.log(sortBy2Criteria(["alpha", "beta", "gamma"]));
