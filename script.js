// Global variables
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const winLoss = document.getElementById("winLoss");
const playerPickText = document.getElementById('playerPick');
const computerPickText = document.getElementById('computerPick');
const scoreBoard = document.getElementById('scoreBoard');
let randomNumber;
let userPick;
let winLossCount = [];
let winCount;
let lossCount;

rockBtn.addEventListener("click", function (event) {
  event.preventDefault();

  userPick = 1;
  playerPickText.innerText = 'Rock'
  console.log("rock");
  computerPick();
  comparePicks();
});

paperBtn.addEventListener("click", function (event) {
  event.preventDefault();

  userPick = 2;
  playerPickText.innerText = 'Paper'
  console.log("paper");
  computerPick();
  comparePicks();
});

scissorsBtn.addEventListener("click", function (event) {
  event.preventDefault();

  userPick = 3;
  playerPickText.innerText = 'Scissors'
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
    winLossCount.push('draw');
    scoreBoard.innerText = winLossCount.join(', ');

  } else if (
    (userPick === 1 && randomNumber === 3) ||
    (userPick === 2 && randomNumber === 1) ||
    (userPick === 3 && randomNumber === 2))
  {
      winLoss.innerText = "You win";
      winLossCount.push('win');
      scoreBoard.innerText = winLossCount.join(', ');
      winCount++;

    } else {
      winLoss.innerHTML = "Computer wins";
      winLoss.innerText = "You lose";
      winLossCount.push('lose');
      scoreBoard.innerText = winLossCount.join(', ');
      lossCount++;
    }
    scoreCounter();
}

function scoreCounter() {
  if(winCount === 5) {
   const buttons = document.querySelectorAll('button');
   buttons.disables = true;
   winLoss.innerText = 'You win the game!'
  }
}

// function youLose() {
//   feedback.innerHTML = "Loser LOSER!!!";
//   guessInput.disabled = true;
//   guessBtn.disabled = true;
//   formText.innerText= '';

//   //Restart game 
//   resetBtn = document.createElement('button');
//   resetBtn.textContent = 'Try Again';
//   document.body.appendChild(resetBtn);

//   resetBtn.addEventListener('click', function() {
//     location.reload();
//   });

//   document.addEventListener('keydown', function(event) {
//     if(event.key === 'Enter') {
//         location.reload();
//     };
//   })
// }; 

