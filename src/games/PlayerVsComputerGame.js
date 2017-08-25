function PlayerVsComputerGame(computerLogic, ui, gameBoard, winConditions) {
<<<<<<< HEAD
=======
  var self = this;
>>>>>>> 2096e877632704e70d9519eba30f162d2cc7c939
  self.computerLogic = computerLogic;
  self.ui = ui;
  self.gameBoard = gameBoard;
  self.winConditions = winConditions;
}

PlayerVsComputerGame.prototype.initializeGame = function() {
<<<<<<< HEAD
  self.playerMarker = "X";
=======
  this.playerMarker = "X";
>>>>>>> 2096e877632704e70d9519eba30f162d2cc7c939
  self.ui.displayTurn(self.playerMarker);
  self.ui.onSpotClicked(PlayerVsComputerGame.prototype.play);
}

PlayerVsComputerGame.prototype.play = function(e) {
<<<<<<< HEAD
  var id = self.ui.spotClicked(e, self.playerMarker);
  var gameBoard = self.gameBoard.getBoard();
  self.gameBoard.updateBoard(id, self.playerMarker);
  if (self.winConditions.endGame(gameBoard)){
    self.ui.displayWin(self.playerMarker);
    self.ui.disableAllClicks();
  } else if (self.gameBoard.isBoardFull()) {
      self.ui.displayTie();
  } else {
      self.playerMarker = self.gameBoard.switchMarker(self.playerMarker);
      self.computerLogic.pickRandomSpace(self.ui, self.gameBoard, self.playerMarker);
      self.playerMarker = self.gameBoard.switchMarker(self.playerMarker);
      self.ui.displayTurn(self.playerMarker);
=======
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
>>>>>>> 2096e877632704e70d9519eba30f162d2cc7c939
  }
}

module.exports = PlayerVsComputerGame;
