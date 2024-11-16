// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;




  function playgame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('playerDisplay').innerText = `PLAYER: ${playerChoice}`;
    document.getElementById('computerDisplay').innerText = `COMPUTER: ${computerChoice}`;

    let result = '';

    if (playerChoice === computerChoice) {
        result = 'ITS A TIE!';
    } else if (isPlayerWinner.call(this, playerChoice, computerChoice)) {
        result = 'You win!';
        document.getElementById('playerScoreDisplay').innerText =
            parseInt(document.getElementById('playerScoreDisplay').innerText) + 1;
    } else {
        result = 'You lose!';
        document.getElementById('computerScoreDisplay').innerText =
            parseInt(document.getElementById('computerScoreDisplay').innerText) + 1;
    }
    
    document.getElementById('resultDisplay').innerText = result;
}

function isPlayerWinner(playerChoice, computerChoice) {
    return (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    );
}

function playgame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('playerDisplay').innerText = `PLAYER: ${playerChoice}`;
    document.getElementById('computerDisplay').innerText = `COMPUTER: ${computerChoice}`;

  

    let result = '';

    if (playerChoice === computerChoice) {
        result = 'ITS A TIE!';
    } else if (isPlayerWinner.call(this, playerChoice, computerChoice)) {
        result = 'You win!';
        document.getElementById('playerScoreDisplay').innerText =
            parseInt(document.getElementById('playerScoreDisplay').innerText) + 1;
    } else {
        result = 'You lose!';
        document.getElementById('computerScoreDisplay').innerText =
            parseInt(document.getElementById('computerScoreDisplay').innerText) + 1;
    }
    
    document.getElementById('resultDisplay').innerText = result;

   
        switch(result){
            case "You win!":
                resultDisplay.classList.add("greenText");
                break;
            case "You lose!":
                resultDisplay.classList.add("redText");
                break;
        }
    }
    
    function isPlayerWinner(playerChoice, computerChoice) {
        return (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        );
    }