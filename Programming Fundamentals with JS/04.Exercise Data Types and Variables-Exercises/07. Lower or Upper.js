function printLowerOrUpper(char) {
  let asciCode = char.charCodeAt(0);
  if (asciCode >= 65 && asciCode < 90) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}
printLowerOrUpper("L");
