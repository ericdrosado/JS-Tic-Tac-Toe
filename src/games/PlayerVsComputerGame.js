function PlayerVsComputerGame(ui, GameBoard, WinConditions) {
  this.ui = ui;
  this.GameBoard = GameBoard;
  this.WinConditions = WinConditions;
}

PlayerVsComputerGame.prototype.initializeGame = function() {
  this.playerMarker = "X";
  this.ui.displayTurn(this.playerMarker);
  console.log("In PvC");
}

module.exports = PlayerVsComputerGame;
