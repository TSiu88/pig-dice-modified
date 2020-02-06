// Business Logic
export class Game{
  constructor(){
    this.players = [];
    this.winningScore = 100;
    this.currentPlayerId = 0;
    this.gameOver = false;
    this.diceAmount = 1;
  }
  
  addPlayer(player){
    this.players.push(player);
  }

  getPlayerScore(playerId){
    return this.players[playerId].totalScore;
  }
  
  startTurn(playerObject){
    var newTurn = new Turn(playerObject);
    return newTurn;
  }
  
  switchPlayer(currentPlayerId){
    if (currentPlayerId === 0) {
      this.currentPlayerId = 1;
    } else if (currentPlayerId === 1) {
      this.currentPlayerId = 0;
    }
  }
  
  endTurn(){
    if (this.getPlayerScore(this.currentPlayerId) >= this.winningScore) {
      this.gameOver = true;
    } else {
      this.switchPlayer(this.currentPlayerId);
    }
  }

}


export class Player{
  constructor(id){
    this.id = id;
    this.totalScore = 0;
  }

  increaseTotalBy(turnScore){
    this.totalScore += turnScore;
  }

}

export class Turn{
  constructor(playerObject){
    this.playerObject = playerObject;
    this.runningTotal = 0;
  }
  
  roll(){
    for (var i = 0; i<this.game.diceAmount; i++){
      var newDie = new Die();
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

}



export class Die{
  constructor(){
    this.value = Math.floor(Math.random() * 6) + 1;
  }
  
  evaluateRoll(){
    if (this.value === 1) {
      return 0;
    } else {
      return this.value;
    }
  }
}
