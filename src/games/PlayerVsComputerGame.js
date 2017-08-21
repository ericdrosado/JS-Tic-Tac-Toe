function PlayerVsComputerGame(computerLogic, ui, gameBoard, winConditions) {
  this.computerLogic = computerLogic;
  this.ui = ui;
  this.gameBoard = gameBoard;
  this.winConditions = winConditions;
}

PlayerVsComputerGame.prototype.initializeGame = function() {
  this.playerMarker = "X";
  this.ui.displayTurn(this.playerMarker);
  this.ui.onSpotClicked(PlayerVsComputerGame.prototype.play.bind(this));
}

PlayerVsComputerGame.prototype.play = function(e) {
  var id = this.ui.spotClicked(e, this.playerMarker);
  var gameBoard = this.gameBoard.updateBoard(id, this.playerMarker);
  if (this.winConditions.endGame(gameBoard)){
    this.ui.displayWin(this.playerMarker);
    this.ui.disableAllClicks();
  } else if (this.gameBoard.isBoardFull()) {
      this.ui.displayTie();
  } else {
      this.playerMarker = this.gameBoard.switchMarker(this.playerMarker);
      this.computerLogic.pickRandomSpace(this.ui, this.gameBoard, this.playerMarker);
      this.playerMarker = this.gameBoard.switchMarker(this.playerMarker);
      this.ui.displayTurn(this.playerMarker);
  }
}

module.exports = PlayerVsComputerGame;
