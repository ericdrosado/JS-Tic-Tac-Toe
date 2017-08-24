function PlayerVsComputerGame(computerLogic, ui, gameBoard, winConditions) {
  var self = this;
  self.computerLogic = computerLogic;
  self.ui = ui;
  self.gameBoard = gameBoard;
  self.winConditions = winConditions;
}

PlayerVsComputerGame.prototype.initializeGame = function() {
  this.playerMarker = "X";
  self.ui.displayTurn(self.playerMarker);
  self.ui.onSpotClicked(PlayerVsComputerGame.prototype.play);
}

PlayerVsComputerGame.prototype.play = function(e) {
  var id = self.ui.spotClicked(e, this.playerMarker);
  self.gameBoard.updateBoard(id, this.playerMarker);
  var gameBoard = self.gameBoard.getBoard();
  if (self.winConditions.endGame(gameBoard)) {
    PlayerVsComputerGame.prototype.win(gameBoard, this.playerMarker);
  } else if (self.gameBoard.isBoardFull()) {
      self.ui.displayTie();
  } else {
    this.playerMarker = self.gameBoard.switchMarker(this.playerMarker);
    self.computerLogic.pickRandomSpace(self.ui, self.gameBoard, this.playerMarker);
    PlayerVsComputerGame.prototype.win(gameBoard, this.playerMarker);
    this.playerMarker = self.gameBoard.switchMarker(this.playerMarker);
  }
}

PlayerVsComputerGame.prototype.win = function(gameBoard, marker) {
  if (self.winConditions.endGame(gameBoard)){
    self.ui.displayWin(marker);
    self.ui.disableAllClicks();
  }
}

module.exports = PlayerVsComputerGame;
