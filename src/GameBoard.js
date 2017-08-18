function GameBoard() {
  this.gameBoard = ["0","1","2","3","4","5","6","7","8"];
  this.spacesAvailable = 9;
}

GameBoard.prototype.updateBoard = function(id, playerMarker) {
  this.gameBoard[id] = playerMarker;
  this.spacesAvailable -= 1;
  return this.gameBoard;
}

GameBoard.prototype.isBoardFull = function() {
  return this.spacesAvailable === 0;
}

GameBoard.prototype.switchMarker = function(playerMarker) {
  if (playerMarker === "X") {
    playerMarker = "O";
  } else {
    playerMarker = "X";
  }
  return playerMarker;
}

GameBoard.prototype.chooseAvailableSpace = function() {
  for (i = 0; i <= 8; i++) {
    var num = this.gameBoard[i].match(/[0-8]/);
    if (this.gameBoard[i] == num ) {
        return this.gameBoard[i];
    }
  }
}

module.exports = GameBoard;
