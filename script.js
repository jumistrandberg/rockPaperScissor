// Global variables
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const winLoss = document.getElementById("winLoss");
let randomNumber;
let userPick;

rockBtn.addEventListener("click", function (event) {
  event.preventDefault();

  userPick = 1;
  console.log("rock");
  computerPick();
  comparePicks();
});

paperBtn.addEventListener("click", function (event) {
  event.preventDefault();

  userPick = 2;
  console.log("paper");
  computerPick();
  comparePicks();
});

scissorsBtn.addEventListener("click", function (event) {
  event.preventDefault();

  userPick = 3;
  console.log("scissors");
  computerPick();
  comparePicks();
});

// Computer pick

function computerPick() {
  randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    console.log("computer rock");
  } else if (randomNumber === 2) {
    console.log("computer paper");
  } else {
    console.log("computer scissors");
  }
}

// Compare picks
function comparePicks() {
  if (userPick === randomNumber) {
    winLoss.innerText = "Draw";
  } else if (
    (userPick === 1 && randomNumber === 3) ||
    (userPick === 2 && randomNumber === 1) ||
    (userPick === 3 && randomNumber === 2))
  {
      winLoss.innerText = "You win"
    } else {
      winLoss.innerHTML = "Computer wins"
    }
    
}
