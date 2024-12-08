const player1ScoreEl = document.getElementById("player1-score");
const player2ScoreEl = document.getElementById("player2-score");
const diceDisplayEl = document.querySelector(".dice-display img");
const rollDiceBtn = document.getElementById("roll-dice");
const resetGameBtn = document.getElementById("reset-game");

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    diceDisplayEl.src = `/img/dice-${diceRoll}.png`;

    if (currentPlayer === 1) {
        player1Score += diceRoll;
        player1ScoreEl.textContent = player1Score;
        currentPlayer = 2; // Switch to Player 2
      } else {
        player2Score += diceRoll;
        player2ScoreEl.textContent = player2Score;
        currentPlayer = 1; // Switch back to Player 1
      }
    }
    function resetGame() {
        player1Score = 0;
        player2Score = 0;
        currentPlayer = 1;
        player1ScoreEl.textContent = player1Score;
        player2ScoreEl.textContent = player2Score;
        diceDisplayEl.src = "/img/one.png"; // Reset dice image
      }
      
      // Event listeners
      rollDiceBtn.addEventListener("click", rollDice);
      resetGameBtn.addEventListener("click", resetGame);