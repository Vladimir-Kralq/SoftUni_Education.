function rotateArray(arr, rotation) {
  for (let i = 0; i < rotation; i++) {
    const lastEl = arr.pop();
    arr.unshift(lastEl);
  }

  return arr.join(" ");
}

console.log(rotateArray(["1", "2", "3", "4"], 2));
