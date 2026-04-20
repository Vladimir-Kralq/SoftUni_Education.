function ticTacToe(moves) {
  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let currentPlayer = "X";

  function checkWinner() {
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] === board[row][1] &&
        board[row][1] === board[row][2] &&
        board[row][0] !== false
      ) {
        return true;
      }
    }
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col] &&
        board[0][col] !== false
      ) {
        return true;
      }
    }
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== false
    ) {
      return true;
    }
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== false
    ) {
      return true;
    }
    return false;
  }

  function isBoardFull() {
    return board.every((row) => row.every((cell) => cell !== false));
  }

  function printBoard() {
    for (let row of board) {
      console.log(row.join("\t"));
    }
  }

  for (let move of moves) {
    let parts = move.split(" ");
    let row = Number(parts[0]);
    let col = Number(parts[1]);

    if (board[row][col] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    board[row][col] = currentPlayer;

    if (checkWinner()) {
      console.log(`Player ${currentPlayer} wins!`);
      printBoard();
      return;
    }

    if (isBoardFull()) {
      console.log("The game ended! Nobody wins :(");
      printBoard();
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
