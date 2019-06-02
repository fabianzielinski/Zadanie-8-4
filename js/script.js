'use strict';

// Var

const params = {
                compChoice : "", 
                playerChoice : "", 
                playerResult : 0, 
                gameResult : 0, 
                rounds : 0
};

var output = document.getElementById('output');
var playerMoveTable= document.querySelectorAll('.player-move');
var pmTableLength = playerMoveTable.length;

// Buttons

var btnPaper = document.getElementById('paper');
var btnRock = document.getElementById('rock');
var btnScissors = document.getElementById('scissors');
var newGame = document.getElementById('newGame');

// Function

var compMove =  function() {

	var cmv = Math.floor(Math.random()*3+1);

	if (cmv == 1) {
		params.compChoice = 'paper';
	} 
	else if (cmv == 2) { 
		params.compChoice = 'rock';
	} 
	else {
		params.compChoice = 'scissors';
	}
	return params.compChoice;
}

var playerMove = function(atrrVar) {

	params.playerChoice = atrrVar;
    alert("1" + params.playerChoice);
	params.compChoice = compMove();
    alert("2" + params.compChoice);
	game();
}

var game = function() {

    if (params.playerResult == (params.rounds-1)) {
        document.getElementById('gameResult').innerHTML = "<span style=\"color:green\">" + 'CONGRATULATIONS!' + '<br>' + 'YOU WON THE ENTIRE GAME' + '<br>' + 'Game over, please press the New Game button' + "</span>";
        document.getElementById('playerResult').innerHTML = params.rounds;
        return;
    } else if (params.compResult == (params.rounds-1)) {
        document.getElementById('gameResult').innerHTML = "<span style=\"color:red\">" + 'YOU LOST THE ENTIRE GAME' + '<br>' + 'Game over, please press the New Game button' + "</span>";
        document.getElementById('compResult').innerHTML =  params.rounds;
        return;
    } else {
    
        if (params.compChoice == params.playerChoice) {
            output.innerHTML = 'YOU TIED!';
        } 
        else if ((params.playerChoice == 'paper' && params.compChoice == 'rock') || (params.playerChoice == 'rock' && params.compChoice == 'scissors') || (params.playerChoice == 'scissors' && params.compChoice == 'paper')) {
            output.innerHTML = 'YOU WON with: ' + params.playerChoice;
            document.getElementById('playerResult').innerHTML = params.playerResult++;
        } 
        else {
            output.innerHTML = 'YOU LOST with: ' + params.playerChoice;
            document.getElementById('compResult').innerHTML = params.compResult++;
        }
    }
} 

//Event

var playerMoveTable = document.getElementsByClassName('player-move');
alert("5 " + playerMoveTable);
for(var i=0; i < pmTableLength; i++) {
    let atrrVar = playerMoveTable[i].getAttribute('data-move');
    playerMoveTable[i].addEventListener('click', function() { 
        alert("6 " + playerMoveTable[i]);
        alert("3 " + atrrVar);
        playerMove(atrrVar);
    });
}

// btnPaper.addEventListener('click', function() {
// 	playerMove('paper');
// });

// btnRock.addEventListener('click', function() {
// 	playerMove('rock');
// });

// btnScissors.addEventListener('click', function() {
// 	playerMove ('scissors');
// });

newGame.addEventListener('click', function() {
    params.rounds = window.prompt('How many rounds = win?');
    params.playerResult = document.getElementById('playerResult').innerHTML = 0;
    params.compResult = document.getElementById('compResult').innerHTML = 0;
    document.getElementById('gameResult').innerHTML = '';
    document.getElementById('output').innerHTML = '';

  
   
    if (isNaN(params.rounds)) {
        output.innerHTML = 'Please pick a number!';
    };
});

