let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainingSlot = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let prevGuess = [];
let numOfGuess = 1;
let allowPlayGame = true;
//check user is allow to play or not
if (allowPlayGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
// validate to check value is present and in 1-100
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("PLease enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numOfGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
//compare the value with given number
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is to Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is to High`);
  }
}
//Fun about to manage remaining guess and previous guess
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numOfGuess++;
  remainingSlot.innerHTML = `${11 - numOfGuess >= 0 ? 11 - numOfGuess : 0}`;
}
//Display message according to given guess number
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
//handle to end current game
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  p.style.cursor = "pointer";
  startOver.appendChild(p);
  allowPlayGame = false;
  newGame();
}
//handle to start new game
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuess = 1;
    guessSlot.innerHTML = "";
    remainingSlot.innerHTML = `${11 - numOfGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    allowPlayGame = true;
  });
}
