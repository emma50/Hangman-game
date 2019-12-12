import Hangman from "./hangman"
import getPuzzle from "./requests"

const puzzleEl = document.getElementById("puzzles")
const guessEl = document.getElementById("guesses")
let game1

window.addEventListener("keypress", (e) => {
   const guess = String.fromCharCode(e.charCode);
   game1.makeGuess(guess)
   render()
})

const render = () => {
   puzzleEl.innerHTML = ""
   guessEl.textContent = game1.statusMessage

   game1.puzzle.split("").forEach((letter) => {
      const letterEl = document.createElement("span")
      letterEl.textContent = letter;
      puzzleEl.appendChild(letterEl)
   })
}

const startGame = async () => {
   const puzzle = await getPuzzle(2)
   game1 = new Hangman(puzzle, 5)
   render();
}

const buttonEl = document.getElementById("reset")
buttonEl.addEventListener("click", startGame)

startGame();