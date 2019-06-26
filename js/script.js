'use strict';

// Var

var params = {
                compChoice: "", 
                playerChoice: "", 
                playerResult: 0,
                compResult: 0, 
                gameResult: 0, 
                rounds: 0,
                lrounds: 0,
                results: []
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

var drawTable = function() {
    var tableBody = document.querySelector("#modal-one .table tbody");
    tableBody.innerHTML = "";
    var lresults = params.results.length;
    for (var i = 0; i < lresults; i++ ) {
        var tr = document.createElement("tr");
        for (var key in params.results[i]) {
            var td = document.createElement("td");
            td.innerHTML = params.results[i][key];
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

var game = function() {

    if (params.playerResult == (params.rounds)) {
        drawTable();
        document.querySelector('#modal-overlay').classList.add('show');
        document.querySelector('#modal-one').classList.add('show');
        document.querySelector('.content-one').innerHTML = 'CONGRATULATIONS!' + '<br>' + 'YOU WON THE ENTIRE GAME' + '<br>' + params.playerResult + ' : ' + params.compResult;
        document.querySelector('.content-two').innerHTML = 'Game over, please press the New Game button';
        return;
    } else if (params.compResult == (params.rounds)) {
        drawTable();
        document.querySelector('#modal-overlay').classList.add('show');
        document.querySelector('#modal-one').classList.add('show');
        document.querySelector('.content-one').innerHTML = 'YOU LOST THE ENTIRE GAME' + '<br>' + params.playerResult + ' : ' + (params.compResult);
        document.querySelector('.content-two').innerHTML = 'Game over, please press the New Game button';
        return;
    } else {
    
        if (params.compChoice == params.playerChoice) {
            output.innerHTML = 'YOU TIED!';
            params.lrounds += 1;
        } 
        else if ((params.playerChoice == 'paper' && params.compChoice == 'rock') || (params.playerChoice == 'rock' && params.compChoice == 'scissors') || (params.playerChoice == 'scissors' && params.compChoice == 'paper')) {
            params.playerResult += 1;
            var {playerResult , compResult} = params;
            output.innerHTML = 'YOU WON with: ' + params.playerChoice;
            document.querySelector('#playerResult').innerHTML = playerResult;
            params.lrounds += 1;
            alert('ps1 ' + params.playerResult);
            alert('cs1 ' + params.compResult);
        } 
        else {
            params.compResult += 1;
            var {playerResult , compResult} = params;
            output.innerHTML = 'YOU LOST with: ' + params.playerChoice;
            document.querySelector('#compResult').innerHTML = compResult;
            params.lrounds += 1;
            alert('ps2 ' + params.playerResult);
            alert('cs2 ' + params.compResult);
        }
        var obj = {
            rN: params.lrounds,
            mP: params.playerChoice,
            mC: params.compChoice,
            rS: output.innerHTML,
            scr: params.playerResult + ' : ' + params.compResult 
        };
        params.results.push(obj);
    }
} 

//Event

for (var i=0; i < pmTableLength; i++) {
    let atrrVar = playerMoveTable[i].getAttribute('data-move');
    playerMoveTable[i].addEventListener('click', function() { 
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

for (var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', hideModal);
}

document.querySelector('#modal-overlay').addEventListener('click', hideModal);

var modals = document.querySelectorAll('.modal');

for (var i = 0; i < modals.length; i++){
    modals[i].addEventListener('click', function(event){
        event.stopPropagation();
    });
}
