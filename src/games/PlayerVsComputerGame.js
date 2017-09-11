function PlayerVsComputerGame(computerLogic, ui, gameBoard, winConditions) {
  var self = this;
  self.computerLogic = computerLogic;
  self.ui = ui;
  self.gameBoard = gameBoard;
  self.winConditions = winConditions;
}

PlayerVsComputerGame.prototype.initializeGame = function() {
  this.playerMarker = "X";
  self.ui.displayTurn(this.playerMarker);
  self.ui.onSpotClicked(PlayerVsComputerGame.prototype.play);
}

PlayerVsComputerGame.prototype.play = function(e) {
  var id = self.ui.spotClicked(e, this.playerMarker);
  self.gameBoard.updateBoard(id, this.playerMarker);
  var gameBoard = self.gameBoard.getBoard();
  if (self.winConditions.isWinner(gameBoard)) {
    self.ui.displayWin(this.playerMarker);
  } else if (self.winConditions.isTie(gameBoard)) {
      self.ui.displayTie();
  } else {
    this.playerMarker = self.gameBoard.switchMarker(this.playerMarker);
    PlayerVsComputerGame.prototype.computersTurn(gameBoard, this.playerMarker);
    this.playerMarker = self.gameBoard.switchMarker(this.playerMarker);
  }
}

PlayerVsComputerGame.prototype.computersTurn = function(gameBoard, marker) {
  var space = self.computerLogic.pickSpace(gameBoard);
  self.ui.displayMarker(space, marker);
  self.gameBoard.updateBoard(space, marker);
  self.ui.disableClickWithID(space);
  PlayerVsComputerGame.prototype.win(gameBoard, marker);
}

PlayerVsComputerGame.prototype.win = function(gameBoard, marker) {
  if (self.winConditions.isWinner(gameBoard)){
    self.ui.displayWin(marker);
    self.ui.disableAllClicks();
  }
}

module.exports = PlayerVsComputerGame;
