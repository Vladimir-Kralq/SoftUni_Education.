function makeSalad(vegetable) {
  function getChopped() {
    return " chopped";
  }

  function addOliveOil() {
    return " with olive oil";
  }

  function addSalt() {
    return " and salt";
  }

  let result = vegetable + getChopped() + addOliveOil() + addSalt();

  console.log("Ready! Serving: " + result);
}

makeSalad("Cucumbers");
