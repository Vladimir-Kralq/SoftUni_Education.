function printArrayDelimiter(arr, delimeter) {
  const res = arr.join(delimeter);

  return res;
}

console.log(printArrayDelimiter(["One", "Two", "Three", "Four", "Five"], "-"));
