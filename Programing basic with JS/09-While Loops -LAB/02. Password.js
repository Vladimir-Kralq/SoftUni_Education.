function password(input) {
  let username = input[0];
  let password = input[1];

  let index = 2;
  let inputPass = input[index];

  while (inputPass !== password) {
    index++;
    inputPass = input[index];

    break;
  }

  console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
