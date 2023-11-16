// Global variables
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const winLoss = document.getElementById("winLoss");
const playerPickText = document.getElementById('playerPick');
const computerPickText = document.getElementById('computerPick');
const scoreBoardWins = document.getElementById('scoreBoardWins');
const scoreBoardLosses = document.getElementById('scoreBoardLosses');
let randomNumber;
let userPick;
let winCount = 0;
let lossCount = 0;

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
    computerPickText.innerText = 'Rock'
    console.log("computer rock");
  } else if (randomNumber === 2) {
    computerPickText.innerText = 'Paper'
    console.log("computer paper");
  } else {
    computerPickText.innerText = 'Scissors'
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
      winLoss.innerText = "You win";
      winCount++;
      scoreBoardWins.innerText = winCount;

    } else {
      winLoss.innerText = "You lose";
      lossCount++;
      scoreBoardLosses.innerText = lossCount;
    }
    scoreCounter();
}

function scoreCounter() {

  if(winCount === 5) {
   winLoss.innerText = 'You win the game!'
   endGame();
  } else if(lossCount === 5) {
    winLoss.innerText  = 'You lose the game!'
    endGame();
  }
}

function endGame() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(function(button) {
    button.disabled = true;
   });

// Restart game 
  resetBtn = document.createElement('button');
  resetBtn.textContent = 'Try Again';
  document.body.appendChild(resetBtn);

  resetBtn.addEventListener('click', function() {
    location.reload();
  });

  document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
      location.reload();
    }
  })

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

