function smallestOfThreeNums(firstInt, secontInt, thirdInt) {
  function getSmallerNum(x, y) {
    return x < y ? x : y;
  }
  let smallest = getSmallerNum(firstInt, secontInt);
  smallest = getSmallerNum(smallest, thirdInt);

  console.log(smallest);
}

smallestOfThreeNums(2, 5, 3);
