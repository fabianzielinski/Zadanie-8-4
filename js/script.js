'use strict';

// Var

var compChoice;
var playerChoice;

var playerResult;
var compResult ;
var gameResult;
var rounds; 

var output = document.getElementById('output');

// Buttons

var btnPaper = document.getElementById('paper');
var btnRock = document.getElementById('rock');
var btnScissors = document.getElementById('scissors');
var newGame = document.getElementById('newGame');

// Function

var compMove =  function() {

	var cmv = Math.floor(Math.random()*3+1);

	if (cmv == 1) {
		compChoice = 'paper';
	} 
	else if (cmv == 2 ) { 
		compChoice = 'rock';
	} 
	else {
		compChoice = 'scissors';
	}
	return compChoice;
}


var playerMove = function(pmv) {

	playerChoice = pmv;
	compChoice = compMove();
	game();
}

function game() {

    if(playerResult == (rounds-1)){
        document.getElementById('gameResult').innerHTML = "<span style=\"color:green\">" + 'CONGRATULATIONS!' + '<br>' + 'YOU WON THE ENTIRE GAME' + '<br>' + 'Game over, please press the New Game button' + "</span>";
        document.getElementById('playerResult').innerHTML = rounds;
        return;
    } else if(compResult == (rounds-1)){
        document.getElementById('gameResult').innerHTML = "<span style=\"color:red\">" + 'YOU LOST THE ENTIRE GAME' + '<br>' + 'Game over, please press the New Game button' + "</span>";
        document.getElementById('compResult').innerHTML =  rounds;
        return;
    } else {
    
        if(compChoice == playerChoice) {
            output.innerHTML = 'YOU TIED!';
        } 
        else if ((playerChoice == 'paper' && compChoice == 'rock') || (playerChoice == 'rock' && compChoice == 'scissors') || (playerChoice == 'scissors' && compChoice == 'paper')) {
            output.innerHTML = 'YOU LOST with: ' + playerChoice;
            document.getElementById('compResult').innerHTML = compResult++;
        } 
        else {
            output.innerHTML = 'YOU WON with: ' + playerChoice;
            document.getElementById('playerResult').innerHTML = playerResult++;
        }
    };
};

//Event

btnPaper.addEventListener('click', function(){
	playerMove('paper');
});

btnRock.addEventListener('click', function(){
	playerMove('rock');
});

btnScissors.addEventListener('click', function(){
	playerMove ('scissors');
});

newGame.addEventListener('click', function(){
    rounds = window.prompt('How many rounds = win?');
    playerResult = document.getElementById('playerResult').innerHTML = 0;
    compResult = document.getElementById('compResult').innerHTML = 0;
    document.getElementById('gameResult').innerHTML = '';
    document.getElementById('output').innerHTML = '';
   
    if(isNaN(rounds)){
        output.innerHTML = 'Please pick a number!';
    }
});