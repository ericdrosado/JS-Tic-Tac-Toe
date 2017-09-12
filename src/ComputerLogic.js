function ComputerLogic(winConditions) {
  var self = this;
  self.winConditions = winConditions;
}

ComputerLogic.prototype.pickSpace = function(gameBoard) {
  return ComputerLogic.prototype.minimax(gameBoard, 0, "O").spot;
}

ComputerLogic.prototype.getAvailableSpots = function(gameBoard) {
  var availableSpots = [];
  for (i = 0; i <= 8; i++) {
    if (gameBoard[i] == i ) {
        availableSpots.push(i);
    }
  }
  return availableSpots;
}

ComputerLogic.prototype.getScore = function(depth, gameBoard, marker) {
  marker = marker === "O" ? "X":"O";
  if (marker == "O" && self.winConditions.isWinner(gameBoard)) {
    return {score: 10 - depth};
  } else if (marker == "X" && self.winConditions.isWinner(gameBoard)) {
      return {score: depth - 10};
  } else if (self.winConditions.isTie(gameBoard)) {
      return {score: 0};
  }
}

ComputerLogic.prototype.minimax = function(gameBoard, depth, marker) {
  var availableSpots = ComputerLogic.prototype.getAvailableSpots(gameBoard);

  if (self.winConditions.isGameOver(gameBoard)) {
    return ComputerLogic.prototype.getScore(depth, gameBoard, marker);
  }

  var moves = [];
  for (var i = 0; i < availableSpots.length; i++) {
    var moveValues = {};
    moveValues.spot = availableSpots[i];
    var gameBoardCopy = gameBoard.slice();
    gameBoardCopy[availableSpots[i]] = marker;
    var result = ComputerLogic.prototype.minimax(gameBoardCopy, depth + 1, marker === "O" ? "X":"O");
    moveValues.score = result.score;
    moves.push(moveValues);
  }

  var bestMove;
  if(marker === "O") {
    var max = -1000;
    for(var i = 0; i < moves.length; i++) {
      if (moves[i].score > max) {
        max = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    var min = 1000;
    for(var i = 0; i < moves.length; i++) {
      if (moves[i].score < min) {
        min = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
}

module.exports = ComputerLogic;
