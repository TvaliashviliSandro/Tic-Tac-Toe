const gridItems = document.querySelectorAll(".grid-item");
let currentPlayer = "X";
let isGameOver = false;

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      gridItems[a].textContent === gridItems[b].textContent &&
      gridItems[b].textContent === gridItems[c].textContent &&
      gridItems[a].textContent !== ""
    ) {
      isGameOver = true;

      // Highlight the winning cells
      gridItems[a].classList.add("winning-cell");
      gridItems[b].classList.add("winning-cell");
      gridItems[c].classList.add("winning-cell");

      alert(`${currentPlayer} wins!`);
      break;
    }
  }

  if (
    !isGameOver &&
    !Array.from(gridItems).some((cell) => cell.textContent === "")
  ) {
    isGameOver = true;
    alert("It's a tie!");
  }
}

function handleCellClick(index) {
  const cell = gridItems[index];

  if (isGameOver || cell.textContent !== "") {
    return;
  }

  cell.textContent = currentPlayer;
  checkWinner();

  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

// Reset the game
function resetGame() {
  gridItems.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("winning-cell");
  });
  currentPlayer = "X";
  isGameOver = false;
}

// Add click event listeners to grid items
gridItems.forEach((cell, index) => {
  cell.addEventListener("click", () => handleCellClick(index));
});
