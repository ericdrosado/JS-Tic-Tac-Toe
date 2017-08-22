function ComputerLogic() {
}
//change
ComputerLogic.prototype.pickRandomSpace = function(ui, gameBoard, marker) {
  var space = gameBoard.chooseAvailableSpace();
  ui.displayMarker(space, marker);
  gameBoard.updateBoard(space, marker);
  ui.disableClickWithID(space);
}

module.exports = ComputerLogic;
