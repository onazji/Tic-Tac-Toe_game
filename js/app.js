
// Game variables
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

// Function to handle player moves
function makeMove(cell) {
  if (!gameOver && board[cell] === "") {
    board[cell] = currentPlayer;
    document.getElementById(`cell${cell}`).textContent = currentPlayer;
    checkWin();
    switchPlayer();
  }
}

// Function to check for winning condition
function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combo of winningCombinations) {
    if (
      board[combo[0]] === currentPlayer &&
      board[combo[1]] === currentPlayer &&
      board[combo[2]] === currentPlayer
    ) {
      gameOver = true;
      alert(`Player ${currentPlayer} wins!`);
      return;
    }
  }

  if (board.every(cell => cell !== "")) {
    gameOver = true;
    alert("It's a draw!");
  }
}

// Function to switch players
function switchPlayer() {
  currentPlayer = (currentPlayer === "X") ? "O" : "X";
}
// reset game logic
// Function to reset the game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  document.querySelectorAll("button").forEach(button => {
    if(button.className !='resetBtn'){
    button.textContent = "";}
  });
}