function ComputerLogic() {
}

ComputerLogic.prototype.pickRandomSpace = function(ui, gameBoard, marker) {
  var space = gameBoard.chooseAvailableSpace();
  ui.displayMarker(space, marker);
  gameBoard.updateBoard(space, marker);
  ui.disableClickWithID(space);
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
