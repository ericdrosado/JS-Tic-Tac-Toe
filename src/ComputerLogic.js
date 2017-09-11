function ComputerLogic(winConditions) {
  var self = this;
  self.winConditions = winConditions;
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

ComputerLogic.prototype.pickSpace = function(gameBoard) {
  return ComputerLogic.prototype.minimax(gameBoard, 0, "O").spot;
}

ComputerLogic.prototype.minimax = function(gameBoard, depth, marker) {
  var availableSpots = ComputerLogic.prototype.getAvailableSpots(gameBoard);

  if (self.winConditions.isGameOver(gameBoard)) {
    marker = ComputerLogic.prototype.switchMarker(marker);
    if (marker == "O" && self.winConditions.isWinner(gameBoard)) {
      return {score: 10 - depth};
    } else if (marker == "X" && self.winConditions.isWinner(gameBoard)) {
        return {score: depth - 10};
    } else if (self.winConditions.isTie(gameBoard)) {
        return {score: 0};
    }
  }

  var scores = [];
  for (var i = 0; i < availableSpots.length; i++) {
    var moveValues = {};
    moveValues.spot = availableSpots[i];
    var gameBoardCopy = gameBoard.slice();
    gameBoardCopy[availableSpots[i]] = marker;
    var result = ComputerLogic.prototype.minimax(gameBoardCopy, depth + 1, ComputerLogic.prototype.switchMarker(marker));
    moveValues.score = result.score;
    scores.push(moveValues);
  }

  var bestMove;
  if(marker === "O") {
    var max = -1000;
    for(var i = 0; i < scores.length; i++) {
      if (scores[i].score > max) {
        max = scores[i].score;
        bestMove = i;
      }
    }
  } else {
    var min = 1000;
    for(var i = 0; i < scores.length; i++) {
      if (scores[i].score < min) {
        min = scores[i].score;
        bestMove = i;
      }
    }
  }
  return scores[bestMove];
}

ComputerLogic.prototype.switchMarker = function(playerMarker) {
  if (playerMarker === "X") {
    playerMarker = "O";
  } else {
    playerMarker = "X";
  }
  return playerMarker;
}


module.exports = ComputerLogic;
