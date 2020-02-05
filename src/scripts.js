// Business Logic
export function Game(){
  this.players = [];
  this.winningScore = 100;
  this.currentPlayerId = 0;
  this.gameOver = false;
  this.diceAmount = 1;
}

Game.prototype.addPlayer = function(player){
  this.players.push(player);
}

Game.prototype.getPlayerScore = function(playerId){
  return this.players[playerId].totalScore;
}

Game.prototype.startTurn = function(playerObject){
  var newTurn = new Turn(playerObject);
  return newTurn;
}

Game.prototype.switchPlayer = function(currentPlayerId){
  if (currentPlayerId === 0) {
    this.currentPlayerId = 1;
  } else if (currentPlayerId === 1) {
    this.currentPlayerId = 0;
  }
}

Game.prototype.endTurn = function(){
  if (this.getPlayerScore(this.currentPlayerId) >= this.winningScore) {
    this.gameOver = true;
  } else {
    this.switchPlayer(this.currentPlayerId);
  }
}

export function Player(id){
  this.id = id;
  this.totalScore = 0;
}

Player.prototype.increaseTotalBy = function(turnScore){
  this.totalScore += turnScore;
}

export function Turn(playerObject){
  this.playerObject = playerObject;
  this.runningTotal = 0;
}

Turn.prototype.roll = function(){
  for (var i = 0; i<this.game.diceAmount; i++){
    var newDie = new Die();
    console.log(newDie.value)
    //updateTurnDisplay(newDie.value); 
    var rollPoints = newDie.evaluateRoll();
    if (rollPoints === 0){
      this.runningTotal = 0;
      return false;
    } else {
      this.runningTotal += rollPoints;
      
    }
  }
  return true;
}

export function Die(){
  this.value = Math.floor(Math.random() * 6) + 1;
}

Die.prototype.evaluateRoll = function(){
  if (this.value === 1) {
    return 0;
  } else {
    return this.value;
  }
}