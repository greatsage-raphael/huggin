// Declare variables to store the state of the game
const board = ["", "", "", "", "", "", "", "", ""];
let player1 = "X";
let player2 = "O";
let currentPlayer = player1;

// Function to print the current state of the board
function printBoard() {
  console.log(`${board[0]} | ${board[1]} | ${board[2]}`);
  console.log(`${board[3]} | ${board[4]} | ${board[5]}`);
  console.log(`${board[6]} | ${board[7]} | ${board[8]}`);
}

// Function to check if the game is over
function isGameOver() {
  // Check if there is a winner
  if (
    (board[0] === board[1] && board[1] === board[2] && board[0] !== "") ||
    (board[3] === board[4] && board[4] === board[5] && board[3] !== "") ||
    (board[6] === board[7] && board[7] === board[8] && board[6] !== "") ||
    (board[0] === board[3] && board[3] === board[6] && board[0] !== "") ||
    (board[1] === board[4] && board[4] === board[7] && board[1] !== "") ||
    (board[2] === board[5] && board[5
