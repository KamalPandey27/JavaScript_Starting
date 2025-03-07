let form = document.getElementsByTagName("form")[0];
let previous = document.getElementById("previous");
let remaining = document.getElementById("remaining");
let correctGuess = document.getElementById("correctGuess");
let arr = [];
let guess = 10;
let result = 0;
let random = randomNumber();
function checkGuess(value) {
  if (value === random) {
    correctGuess.innerHTML = `🎉 Guess is correct: ${value}`;
    ++result;
    random = randomNumber();
  } else if (value > random) {
    correctGuess.innerHTML = `📉 Too high! Try again.`;
  } else {
    correctGuess.innerHTML = `📈 Too low! Try again.`;
  }
  arr.push(value);
  --guess;
}

function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = parseInt(document.getElementById("input").value);
  if (guess > 0 && guess <= 10) {
    checkGuess(inputValue);
    previous.innerHTML = `Previous Guesses: ${arr.join(", ")}`;
    remaining.innerHTML = `Remaining Guesses: ${guess}`;
  } else {
    correctGuess.innerHTML = `You win ${result} times and you can use all of your chance refresh again to start`;
    result = 0;
  }
  document.getElementById("input").value = "";
});
