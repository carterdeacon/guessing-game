console.log("Guessing game");

// assign variable to all
var allNumbers = document.querySelectorAll('section button');
var resetButton = document.querySelector('.reset');
var guessCounter = document.querySelector('.guesses');
var resultDiv = document.querySelector('.result');
var guessNumber = 0;
// hard-coded first for convenience
var arrayOfNums = [1,2,3,4,5,6,7,8,9,10];
var randomNum = Math.floor((Math.random() * arrayOfNums.length) + 1);


// Function to disable on click, increment guesses and return result
function handleUserGuess(event) {
    guessNumber++;
    guessCounter.textContent = guessNumber;
    let clickedOn = event.target;
    let userGuess = Number(clickedOn.dataset.number);
    console.log(userGuess);
    clickedOn.disabled = true;
    if (userGuess === randomNum) {
        resultDiv.textContent = "Hooray! You did it 😄";
        resetButton.textContent = "Play Again";
        allNumbers.forEach(function(button) {
            button.disabled = true;
        })
    }
}

function handleReset() {
    for (let i = 0; i < allNumbers.length; i++) {
        allNumbers[i].disabled = false;
    }
    resultDiv.textContent = "";
    guessCounter.textContent = "0";
    guessNumber = 0;
    resetButton.textContent = "Reset";
    randomNum = Math.floor((Math.random() * arrayOfNums.length) + 1);
}

resetButton.addEventListener('click', handleReset);

// forEach to addeventlistener to each button
allNumbers.forEach(function(button) {
    button.addEventListener('click', handleUserGuess)
})