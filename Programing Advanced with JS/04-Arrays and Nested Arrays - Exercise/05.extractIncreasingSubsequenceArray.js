function extractIncreasingSubsequenceArray(arr) {
  /*  let result=[];

    for(let i=0;  i< arr.length; i++){
        let currentNum = arr[i];
        if(currentNum >= result[result.length-1] || result.length === 0){
        result.push(currentNum);
        }
    }
    return result;*/

  return arr.reduce((acc, num) => {
    if (num >= acc[acc.length - 1] || acc.length === 0) {
      acc.push(num);
    }
    return acc;
  }, []);
}
console.log(extractIncreasingSubsequenceArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
