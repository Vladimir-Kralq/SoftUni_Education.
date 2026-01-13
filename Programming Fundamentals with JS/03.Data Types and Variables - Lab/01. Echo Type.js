function printEchoTpe(type) {
  let typeOfParameter = typeof type;
  console.log(typeOfParameter);
  if (typeOfParameter === "string" || typeOfParameter === "number") {
    console.log(type);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}

printEchoTpe("Hello, JavaScript!");
printEchoTpe(42);
printEchoTpe(true);
