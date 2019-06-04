'use strict';

// Var

var params = {
                compChoice : "", 
                playerChoice : "", 
                playerResult : 0,
                compResult : 0, 
                gameResult : 0, 
                rounds : 0
};

var output = document.getElementById('output');
var viewCompResalt = document.querySelector('#compResult');
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

    if (params.playerResult == (params.rounds)) {
        document.querySelector('#modal-overlay').classList.add('show');
        document.querySelector('#modal-one').classList.add('show');
        // document.querySelector('.content').innerHTML = "<span style=\"color:green\">" + 'CONGRATULATIONS!' + '<br>' + 'YOU WON THE ENTIRE GAME' + '<br>' + 'Game over, please press the New Game button' + "</span>";
        document.querySelector('.content-one').innerHTML = 'CONGRATULATIONS!' + '<br>' + 'YOU WON THE ENTIRE GAME' + '<br>' + 'Game over, please press the New Game button';
        document.querySelector('.content-two').innerHTML = params.playerResult + ' : ' + params.compResult;
        return;
    } else if (params.compResult == (params.rounds)) {
        document.getElementById('gameResult').innerHTML = "<span style=\"color:red\">" + 'YOU LOST THE ENTIRE GAME' + '<br>' + 'Game over, please press the New Game button' + "</span>";
        document.getElementById('compResult').innerHTML =  params.rounds;
        return;
    } else {
    
        if (params.compChoice == params.playerChoice) {
            output.innerHTML = 'YOU TIED!';
        } 
        else if ((params.playerChoice == 'paper' && params.compChoice == 'rock') || (params.playerChoice == 'rock' && params.compChoice == 'scissors') || (params.playerChoice == 'scissors' && params.compChoice == 'paper')) {
            params.playerResult += 1;
            var {playerResult , compResult} = params;
            output.innerHTML = 'YOU WON with: ' + params.playerChoice;
            document.querySelector('#playerResult').innerHTML = playerResult;
            alert('ps1 ' + playerResult);
            alert('cs1 ' + compResult);
        } 
        else {
            params.compResult += 1;
            output.innerHTML = 'YOU LOST with: ' + params.playerChoice;
            viewCompResalt.innerHTML = params.compResult;
            alert('ps2 ' + params.playerResult);
            alert('cs2 ' + params.compResult);
        }
    }
} 

//Event

var playerMoveTable = document.getElementsByClassName('player-move');
// alert("5 " + playerMoveTable);
for(var i=0; i < pmTableLength; i++) {
    let atrrVar = playerMoveTable[i].getAttribute('data-move');
    playerMoveTable[i].addEventListener('click', function() { 
        // alert("6 " + playerMoveTable[i]);
        // alert("3 " + atrrVar);
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

var hideModal = function(event){
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.remove('show');
};

var closeButtons = document.querySelectorAll('.modal .close');

for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', hideModal);
}

document.querySelector('#modal-overlay').addEventListener('click', hideModal);

var modals = document.querySelectorAll('.modal');

for(var i = 0; i < modals.length; i++){
    modals[i].addEventListener('click', function(event){
        event.stopPropagation();
    });
}
