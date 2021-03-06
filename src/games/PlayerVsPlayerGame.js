function PlayerVsPlayerGame(ui, gameBoard, winConditions) {
  var self = this;
  self.ui = ui;
  self.gameBoard = gameBoard;
  self.winConditions = winConditions;
}

PlayerVsPlayerGame.prototype.initializeGame = function() {
  self.playerMarker = "X";
  self.ui.displayTurn(self.playerMarker);
  self.ui.onSpotClicked(PlayerVsPlayerGame.prototype.play);
}

PlayerVsPlayerGame.prototype.play = function(e) {
  var id = self.ui.spotClicked(e, self.playerMarker);
  var gameBoard = self.gameBoard.getBoard();
  self.gameBoard.updateBoard(id, self.playerMarker);
  if (self.winConditions.isWinner(gameBoard)) {
    self.ui.displayWin(this.playerMarker);
  } else if (self.winConditions.isTie(gameBoard)) {
      self.ui.displayTie();
  } else {
      self.playerMarker = self.gameBoard.switchMarker(self.playerMarker);
      self.ui.displayTurn(self.playerMarker);
  }
}

module.exports = PlayerVsPlayerGame;
