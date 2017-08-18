function PlayerVsComputerGame(ComputerLogic, ui, GameBoard, WinConditions) {
  this.ComputerLogic = ComputerLogic;
  this.ui = ui;
  this.GameBoard = GameBoard;
  this.WinConditions = WinConditions;
}

PlayerVsComputerGame.prototype.initializeGame = function() {
  this.playerMarker = "X";
  this.ui.displayTurn(this.playerMarker);
  this.ui.onSpotClicked(this.play.bind(this));
}

PlayerVsComputerGame.prototype.play = function(e) {
  var id = this.ui.spotClicked(e, this.playerMarker);
  var gameBoard = this.GameBoard.updateBoard(id, this.playerMarker);
  if (this.WinConditions.endGame(gameBoard)){
    this.ui.displayWin(this.playerMarker);
    this.ui.disableAllClicks();
  } else if (this.GameBoard.isBoardFull()) {
      this.ui.displayTie();
  } else {
      this.playerMarker = this.GameBoard.switchMarker(this.playerMarker);
      this.ComputerLogic.pickRandomSpace(this.ui, this.GameBoard, this.playerMarker);
      this.playerMarker = this.GameBoard.switchMarker(this.playerMarker);
      this.ui.displayTurn(this.playerMarker);
  }
}

module.exports = PlayerVsComputerGame;
