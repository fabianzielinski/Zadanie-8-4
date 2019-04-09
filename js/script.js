'use strict';

var compChoice;
var playerChoice;

var playerResult = 0;
var compResult = 0;
var gameResult = 0;
var rounds = 0; 

var btnPaper = document.getElementById('paper');
var btnRock = document.getElementById('rock');
var btnScissors = document.getElementById('scissors');
var output = document.getElementById('output');

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
	};
	return compChoice;
}


var playerMove = function(pmv) {

	playerChoice = pmv;

	compChoice = compMove();

	// console.log(pmv);

	// document.getElementById('output').innerHTML = playerChoice +'  '+ compChoice ;

	game();

}

function game() {

    if(playerResult == (rounds-1)){
        document.getElementById('gameResult').innerHTML = "<span style=\"color:green\">" + 'CONGRATULATIONS!' + '<br>' + 'YOU WON THE ENTIRE GAME' + '<br>' + 'Game over, please press the New Game button' + "</span>";
        document.getElementById('playerResult').innerHTML = rounds;
        return;
    } else if(compResult == (rounds-1)){
        document.getElementById('gameResult').innerHTML = "<span style=\"color:red\">" + 'YOU LOST THE ENTIRE GAME' + '<br>' + 'Game over, please press the New Game button' + "</span>";
        document.getElementById('compResult').innerHTML = rounds;
        return;
    } else {
    
        if(compChoice == playerChoice) {
            output.innerHTML = 'YOU TIED!';
        } else if ((playerChoice == 'paper' && compChoice == 'rock') || (playerChoice == 'rock' && compChoice == 'scissors') || (playerChoice == 'scissors' && compChoice == 'paper')){
            output.innerHTML = 'YOU LOST with: ' + playerChoice;
            document.getElementById('compResult').innerHTML = 'Komputer : ' + compResult++;
        } else {
            output.innerHTML = 'YOU WON with: ' + playerChoice;
            document.getElementById('playerResult').innerHTML = 'Player : ' + playerResult++;
        }
    }
}


btnPaper.addEventListener('click', function(){
	playerMove('paper');
});

btnRock.addEventListener('click', function(){
	playerMove('rock');
});

btnScissors.addEventListener('click', function(){
	playerMove ('scissors');
});