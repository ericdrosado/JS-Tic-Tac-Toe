function PlayerVsComputerGame(ui, GameBoard, WinConditions) {
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
      PlayerVsComputerGame.prototype.simpleAI(this.ui, this.GameBoard, this.playerMarker);
      this.playerMarker = this.GameBoard.switchMarker(this.playerMarker);
      this.ui.displayTurn(this.playerMarker);
  }
}

PlayerVsComputerGame.prototype.simpleAI = function(ui, gameBoard, marker) {
  var space = gameBoard.chooseAvailableSpace();
  ui.displayMarker(space, marker);
  gameBoard.updateBoard(space, marker);
  ui.disableClickWithID(space);
}

module.exports = PlayerVsComputerGame;
