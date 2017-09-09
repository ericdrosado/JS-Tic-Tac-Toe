function ComputerLogic() {
}

ComputerLogic.prototype.getMove = function(gameBoard) {
  return gameBoard;
}

ComputerLogic.prototype.chooseAvailableSpace = function(gameBoard) {
  for (i = 0; i <= 8; i++) {
    if (gameBoard[i] == i ) {
        return gameBoard[i];
    }
  }
}

ComputerLogic.prototype.pickSpace = function(gameBoard) {
  var space = ComputerLogic.prototype.chooseAvailableSpace(gameBoard);
  return space;
}

ComputerLogic.prototype.getScore = function(marker, win) {
  if (marker === "X" && win) {
    return 10;
  } else if (marker === "O" && win) {
      return -10;
  } else {
      return 0;
  }
}

module.exports = ComputerLogic;
