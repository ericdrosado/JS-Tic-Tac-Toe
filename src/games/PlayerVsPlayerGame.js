function PlayerVsPlayerGame(ui, gameBoard, winConditions) {
  this.ui = ui;
  this.gameBoard = gameBoard;
  this.winConditions = winConditions;
}

PlayerVsPlayerGame.prototype.initializeGame = function() {
  this.playerMarker = "X";
  this.ui.displayTurn(this.playerMarker);
  this.ui.onSpotClicked(PlayerVsPlayerGame.prototype.play.bind(this));
}

PlayerVsPlayerGame.prototype.play = function(e) {
  var id = this.ui.spotClicked(e, this.playerMarker);
  var gameBoard = this.gameBoard.updateBoard(id, this.playerMarker);
  if (this.winConditions.endGame(gameBoard)){
    this.ui.displayWin(this.playerMarker);
    this.ui.disableAllClicks();
  } else if (this.gameBoard.isBoardFull()) {
      this.ui.displayTie();
  } else {
      this.playerMarker = this.gameBoard.switchMarker(this.playerMarker);
      this.ui.displayTurn(this.playerMarker);
  }
}

module.exports = PlayerVsPlayerGame;
