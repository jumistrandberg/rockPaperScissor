const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('rock')
})

paperBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('paper')
})

scissorsBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('scissors')
})