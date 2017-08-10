var $ = require('jquery');

function PlayerVsPlayerGame(ui) {
  this.ui = ui;
}

PlayerVsPlayerGame.prototype.initializeGame = function() {
  var playerMarker = "X";
  this.ui.displayTurn(playerMarker);
  this.ui.onSpotClicked(playerMarker, this.play);
}

PlayerVsPlayerGame.prototype.play = (playerMarker, e) => {
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
