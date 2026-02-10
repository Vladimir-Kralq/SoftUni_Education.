function printPasswordValidator(password) {
  let isValid = true;

  function isInRange(min, max, value) {
    return value >= min && value <= max;
  }

  function isLengthValid(password) {
    return isInRange(6, 10, password.length);
  }

  function hasOnlyLettersAndDigits(password) {
    for (let char of password) {
      let charCode = char.charCodeAt(0);

      let isDigit = isInRange(48, 57, charCode);
      let isUpperCaseLetter = isInRange(65, 90, charCode);
      let isLowerCaseLetter = isInRange(97, 122, charCode);

      if (!isDigit && !isUpperCaseLetter && !isLowerCaseLetter) {
        return false;
      }
    }
    return true;
  }

  function hasAtLeastTwoDigits(password) {
    let digitCount = 0;

    for (let char of password) {
      let charCode = char.charCodeAt(0);
      if (isInRange(48, 57, charCode)) {
        digitCount++;
      }
    }

    return digitCount >= 2;
  }

  if (!isLengthValid(password)) {
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
  }

  if (!hasOnlyLettersAndDigits(password)) {
    console.log("Password must consist only of letters and digits");
    isValid = false;
  }

  if (!hasAtLeastTwoDigits(password)) {
    console.log("Password must have at least 2 digits");
    isValid = false;
  }

  if (isValid) {
    console.log("Password is valid");
  }
}

printPasswordValidator("logIn");
