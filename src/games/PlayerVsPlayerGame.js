var $ = require('jquery');

function PlayerVsPlayerGame(ui) {
  this.ui = ui;
}

PlayerVsPlayerGame.prototype.initializeGame = function() {
  this.ui.displayTurn("X");
  this.ui.onSpotClicked(this.play);
}

PlayerVsPlayerGame.prototype.play = function(e) {
  var playerMarker = "X";
  this.ui.updateBoard(e, playerMarker);
  playerMarker = PlayerVsPlayerGame.prototype.switchMarker(playerMarker);
  this.ui.displayTurn(playerMarker);
}

PlayerVsPlayerGame.prototype.switchMarker = function(playerMarker) {
  if (playerMarker == "X") {
    playerMarker = "O";
  } else {
    playerMarker = "X";
  }
  return playerMarker;
}

module.exports = PlayerVsPlayerGame;
