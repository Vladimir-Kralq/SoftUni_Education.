function readText(array) {
  let index = 0;
  let read = array[index];

  while (read !== "Stop") {
    console.log(read);
    index++;
    read = array[index];
  }
}

readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
