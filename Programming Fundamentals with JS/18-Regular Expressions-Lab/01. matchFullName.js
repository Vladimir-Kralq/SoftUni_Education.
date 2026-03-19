function printMatchFullName(input) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let result = input.matchAll(pattern);

  let output = [];

  for (let match of result) {
    output.push(match);
  }

  console.log(output.join(" "));
}
printMatchFullName(
  "ivan ivanov, Ivan ivanov, ivan Ivanov,IVan Ivanov, Ivan IvAnov, Ivan Ivanov",
);
