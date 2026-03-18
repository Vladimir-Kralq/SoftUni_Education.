function extractFile(filePath) {
  let fileFullName = filePath.split("\\").pop();
  let lastIndex = fileFullName.lastIndexOf(".");

  let file = fileFullName.slice(0, lastIndex);
  let extension = fileFullName.slice(lastIndex + 1);

  console.log(`File name: ${file}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
