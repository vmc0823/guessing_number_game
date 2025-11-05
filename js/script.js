//alert("running external JS code!")

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;
let wins = 0; //new variables
let losses = 0; //new variables
const maxAttempts = 7; //new variables

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";

    //showing the guess button
   document.querySelector("#guessBtn").style.display = "inline";
  
   //adding focus to textbox
    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus();
    playerGuess.value = "";

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    //clearing previous guesses
   document.querySelector("#guesses").textContent = "";

   updateHeadsUp(); //helper method
}

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
        }
    attempts++;
    console.log("Attempts:" + attempts);
    updateHeadsUp();
    feedback.style.color = "orange";
        if (guess == randomNumber) {
            feedback.textContent = "You guessed it! You Won!";
            feedback.style.color = "darkgreen";
            wins++; //new adding to the wins
            updateHeadsUp();
            gameOver();
        } else {
            document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == maxAttempts) {
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            losses++; //new adding to the losses
            updateHeadsUp();
            gameOver();
        } else if ( guess > randomNumber) {
            feedback.textContent = "Guess was high";
        } else {
            feedback.textContent = "Guess was low";
        }
    }
    
}

function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none"; //hides guess button
    resetBtn.style.display = "inline"; //displays reset button
    updateHeadsUp();
}

//helper function, heads-up display update for 
function updateHeadsUp() {       
  const left = maxAttempts - attempts;
  const attemptsEl = document.querySelector("#attemptsLeft");
  const winsEl = document.querySelector("#wins");
  const lossesEl = document.querySelector("#losses");
  if (attemptsEl) attemptsEl.textContent = left;
  if (winsEl) winsEl.textContent = wins;
  if (lossesEl) lossesEl.textContent = losses;
}

//document.querySelector("h1").style.color = "red"; to change colors from JS to HTML