// Global variables 
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('rock')
    computerPick();
});

paperBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('paper')
    computerPick()
});

scissorsBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('scissors')
    computerPick()
});

// Computer pick 

function computerPick() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1) {
        console.log('computer rock')
    } else if (randomNumber === 2) {
        console.log('computer paper')
    } else {
        console.log('computer scissors')
    }
}
