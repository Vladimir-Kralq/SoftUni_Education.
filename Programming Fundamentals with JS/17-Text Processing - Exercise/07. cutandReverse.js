function cutandReverse(str) {
  let mid = str.length / 2;

  let firsHalf = str.substring(0, mid);

  let secondHalf = str.substring(mid);

  let reversedFirsHalf = firsHalf.split("").reverse().join("");
  let reversedSecondHalf = secondHalf.split("").reverse().join("");

  console.log(reversedFirsHalf);
  console.log(reversedSecondHalf);
}

cutandReverse("tluciffiDsIsihTgnidoc");

cutandReverse("tluciffiDsIsihTgnizamAoSsIsihT");
