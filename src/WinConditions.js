function WinConditions() {
}

WinConditions.prototype.isGameOver = function(gameBoard) {
  if (WinConditions.prototype.isWinner(gameBoard) || WinConditions.prototype.isTie(gameBoard)) {
    return true;
  } else {
    return false;
  }
}

WinConditions.prototype.isTie = function(gameBoard) {
  for (i = 0; i < 9; i++) {
    if (gameBoard[i] == i) {
      return false;
    }
  }
  return true;
}

WinConditions.prototype.isWinner = function(gameBoard) {
  return WinConditions.prototype.winHorizontalTop(gameBoard) || WinConditions.prototype.winHorizontalMiddle(gameBoard) ||
        WinConditions.prototype.winHorizontalBottom(gameBoard) || WinConditions.prototype.winVerticalLeft(gameBoard) ||
        WinConditions.prototype.winVerticalMiddle(gameBoard) || WinConditions.prototype.winVerticalRight(gameBoard) ||
        WinConditions.prototype.winDiagonalBackwards(gameBoard) || WinConditions.prototype.winDiagonalForwards(gameBoard);
}

WinConditions.prototype.winHorizontalTop = function(gameBoard) {
  return gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2];
}

WinConditions.prototype.winHorizontalMiddle = function(gameBoard) {
  return gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5];
}

WinConditions.prototype.winHorizontalBottom = function(gameBoard) {
  return gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8];
}

WinConditions.prototype.winVerticalLeft = function(gameBoard) {
  return gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6];
}

WinConditions.prototype.winVerticalMiddle = function(gameBoard) {
  return gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7];
}

WinConditions.prototype.winVerticalRight = function(gameBoard) {
  return gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8];
}

WinConditions.prototype.winDiagonalBackwards = function(gameBoard) {
  return gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8];
}

WinConditions.prototype.winDiagonalForwards = function(gameBoard) {
  return gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6];
}

module.exports = WinConditions;
