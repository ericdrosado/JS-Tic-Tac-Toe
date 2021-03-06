function GameBoard() {
  this.gameBoard = ["0","1","2","3","4","5","6","7","8"];
}

GameBoard.prototype.getBoard = function() {
  return this.gameBoard;
}

GameBoard.prototype.updateBoard = function(id, playerMarker) {
  this.gameBoard[id] = playerMarker;
}

GameBoard.prototype.switchMarker = function(playerMarker) {
  playerMarker = playerMarker === "O" ? "X":"O"
  return playerMarker;
}

module.exports = GameBoard;
