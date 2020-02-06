import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Game} from './scripts';
import {Player} from './scripts';

// User Interface Logic -----------------------------------------------------

var game = new Game();
var currentTurn;

function beginTurn(player){
  currentTurn = game.startTurn(player);
  takeATurn();
}

function takeATurn(){
  var continuingTurn = currentTurn.roll();
  if (!continuingTurn) {
    alert("You rolled a 1. Lose a turn. =(");
    game.endTurn();
    newTurnScreen();
  } else {
    continueTurnScreen();
  }
  
}

function hold(){
  game.players[game.currentPlayerId].increaseTotalBy(currentTurn.runningTotal);
  displayScores();
  game.endTurn();
  if(game.gameOver === true){
    gameOver();
  }else{
    newTurnScreen();
  }
}

function gameOver(){
  $("#gameOver").show();
  $("#turn").hide();
  displayScores();
  $("#winner").text(game.currentPlayerId + 1);
}

function displayScores(){
  $("#p1score").text(game.players[0].totalScore);
  $("#p2score").text(game.players[1].totalScore);
}

// function updateTurnDisplay(die){
//   $("#diceValue").append(die + " ");
// }

function continueTurnScreen(){
  $("#holdOrRollAgain").show();
  $("#rollDie").hide();
  $("#turnTotal").text(currentTurn.runningTotal);
}

function newTurnScreen(){
  $("#rollDie").show();
  $("#currPlayer").text("Player " + (game.currentPlayerId+ 1));
  $("#holdOrRollAgain").hide();
  $("#diceValue").text("");
  $("#turnTotal").text("");
}

$(document).ready(function(){
  $("#winScore").text(game.winningScore);

  $("#startButton").click(function(){
    game = new Game();
    $("#currentStats").show();
    $("#turn").show();
    newTurnScreen();
    $("#gameOver").hide();
    $("#newGame").hide();

    var player1 = new Player(0);
    var player2 = new Player(1);
    game.addPlayer(player1);
    game.addPlayer(player2);

    game.diceAmount = $("#numDice").val();
    displayScores();
  });

  $("#rollButton").click(function(){
    beginTurn(game.players[game.currentPlayerId]);
  });

  $("#holdButton").click(function(){
    hold();
  });

  $("#rollAgainButton").click(function(){
    takeATurn();
  });

  $("#newGameButton").click(function(){
    $("#gameOver").hide();
    $("#newGame").show();
    $("#currentStats").hide();
  });
});