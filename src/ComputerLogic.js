function ComputerLogic() {
}

ComputerLogic.prototype.pickRandomSpace = function(ui, gameBoard, marker) {
  var space = gameBoard.chooseAvailableSpace();
  ui.displayMarker(space, marker);
  gameBoard.updateBoard(space, marker);
  ui.disableClickWithID(space);
}

ComputerLogic.prototype.getScore = function(user, win) {
  if (user === "player" && win) {
    return 10;
  } else if (user === "computer" && win) {
      return -10;
  } else {
      return 0;
  }
}


module.exports = ComputerLogic;
