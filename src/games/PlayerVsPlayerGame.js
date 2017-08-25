function PlayerVsPlayerGame(ui, gameBoard, winConditions) {
<<<<<<< HEAD
=======
  var self = this
>>>>>>> 2096e877632704e70d9519eba30f162d2cc7c939
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
<<<<<<< HEAD
  var gameBoard = self.gameBoard.getBoard();
  self.gameBoard.updateBoard(id, self.playerMarker);
=======
  self.gameBoard.updateBoard(id, self.playerMarker);
  var gameBoard = self.gameBoard.getBoard();
>>>>>>> 2096e877632704e70d9519eba30f162d2cc7c939
  if (self.winConditions.endGame(gameBoard)){
    self.ui.displayWin(self.playerMarker);
    self.ui.disableAllClicks();
  } else if (self.gameBoard.isBoardFull()) {
      self.ui.displayTie();
  } else {
      self.playerMarker = self.gameBoard.switchMarker(self.playerMarker);
      self.ui.displayTurn(self.playerMarker);
  }
}

module.exports = PlayerVsPlayerGame;
