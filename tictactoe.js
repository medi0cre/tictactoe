var symbol = "x";
var playerxScore = document.querySelector(".playerxScore");
var playeroScore = document.querySelector(".playeroScore");

function toggleSymbol() {
  if (symbol == "x")
      symbol = "o";
  else
      symbol = "x";
}

var reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    startGame();
    result.textContent = "";
    buttons.forEach((button) => {
      if(button.value!="reset")
        button.textContent = "";
    });
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  if(button.value!="reset") {
  button.addEventListener("click", () => {
    button.textContent = symbol;
    button.disabled = true;
    toggleSymbol();
    checkForWinner();
  });
}
});

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const result = document.querySelector(".result");

function stopGame() {
    buttons.forEach((button) => {
        if(button.value!="reset")
            button.disabled = true;
    });
}

function startGame() {
  buttons.forEach((button) => {
    if(button.value!="reset")
      button.disabled = false;
  });
}

function checkForWinner() {
    if ((one.textContent == "x" && two.textContent == "x" && three.textContent == "x")
    || (four.textContent == "x" && five.textContent == "x" && six.textContent == "x")
    || (seven.textContent == "x" && eight.textContent == "x" && nine.textContent == "x")
    || (one.textContent == "x" && four.textContent == "x" && seven.textContent == "x")
    || (two.textContent == "x" && five.textContent == "x" && eight.textContent == "x")
    || (three.textContent == "x" && six.textContent == "x" && nine.textContent == "x")
    || (one.textContent == "x" && five.textContent == "x" && nine.textContent == "x")
    || (three.textContent == "x" && five.textContent == "x" && seven.textContent == "x")) {
      result.textContent = "x wins";
      playerxScore.textContent = (Number(playerxScore.textContent) + 1).toString();
      stopGame();
    }

    if ((one.textContent == "o" && two.textContent == "o" && three.textContent == "o")
    || (four.textContent == "o" && five.textContent == "o" && six.textContent == "o")
    || (seven.textContent == "o" && eight.textContent == "o" && nine.textContent == "o")
    || (one.textContent == "o" && four.textContent == "o" && seven.textContent == "o")
    || (two.textContent == "o" && five.textContent == "o" && eight.textContent == "o")
    || (three.textContent == "o" && six.textContent == "o" && nine.textContent == "o")
    || (one.textContent == "o" && five.textContent == "o" && nine.textContent == "o")
    || (three.textContent == "o" && five.textContent == "o" && seven.textContent == "o")) {
      result.textContent = "o wins";
      playeroScore.textContent = (Number(playeroScore.textContent) + 1).toString();
      stopGame();
    }
}