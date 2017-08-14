var $ = require('jquery');

function PlayerVsPlayerGame(ui) {
  this.ui = ui;
}

PlayerVsPlayerGame.prototype.initializeGame = function() {
  this.gameBoard = ["0","1","2","3","4","5","6","7","8"];
  this.playerMarker = "X";
  this.ui.displayTurn(this.playerMarker);
  this.ui.onSpotClicked(this.play.bind(this));
}

PlayerVsPlayerGame.prototype.play = function(e) {
  var id = this.ui.spotClicked(e, this.playerMarker);
  this.gameBoard[id] = this.playerMarker;
  this.ui.displayTurn(this.playerMarker);
  if (PlayerVsPlayerGame.prototype.endGame(this.gameBoard)){
    this.ui.displayWin(this.playerMarker);
    this.ui.disableAllClicks();
  }
  this.playerMarker = PlayerVsPlayerGame.prototype.switchMarker(this.playerMarker);
}

PlayerVsPlayerGame.prototype.switchMarker = function(playerMarker) {
  if (playerMarker == "X") {
    playerMarker = "O";
  } else {
    playerMarker = "X";
  }
  return playerMarker;
}

PlayerVsPlayerGame.prototype.endGame = function(gameBoard) {
  return PlayerVsPlayerGame.prototype.winHorizontalTop(gameBoard) || PlayerVsPlayerGame.prototype.winHorizontalMiddle(gameBoard) ||
        PlayerVsPlayerGame.prototype.winHorizontalBottom(gameBoard) || PlayerVsPlayerGame.prototype.winVerticalLeft(gameBoard) ||
        PlayerVsPlayerGame.prototype.winVerticalMiddle(gameBoard) || PlayerVsPlayerGame.prototype.winVerticalRight(gameBoard) ||
        PlayerVsPlayerGame.prototype.winDiagonalBackwards(gameBoard) || PlayerVsPlayerGame.prototype.winDiagonalForwards(gameBoard);
    //Display end of game
}

PlayerVsPlayerGame.prototype.winHorizontalTop = function(gameBoard) {
  return gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2];
}

PlayerVsPlayerGame.prototype.winHorizontalMiddle = function(gameBoard) {
  return gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5];
}

PlayerVsPlayerGame.prototype.winHorizontalBottom = function(gameBoard) {
  return gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8];
}

PlayerVsPlayerGame.prototype.winVerticalLeft = function(gameBoard) {
  return gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6];
}

PlayerVsPlayerGame.prototype.winVerticalMiddle = function(gameBoard) {
  return gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7];
}

PlayerVsPlayerGame.prototype.winVerticalRight = function(gameBoard) {
  return gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8];
}

PlayerVsPlayerGame.prototype.winDiagonalBackwards = function(gameBoard) {
  return gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8];
}

PlayerVsPlayerGame.prototype.winDiagonalForwards = function(gameBoard) {
  return gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6];
}

module.exports = PlayerVsPlayerGame;
