function printSortedArray(arr) {
  let primaryCriteria = arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  console.log(primaryCriteria.join("\n"));
}

printSortedArray(["alpha", "beta", "gamma"]);
