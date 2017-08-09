var $ = require('jquery');

function PlayerVsPlayerGame(ui) {
  this.ui = ui;
}

PlayerVsPlayerGame.prototype.initializeGame = function() {
  this.playerMarker = "X";
  this.ui.displayTurn(this.playerMarker);
  this.ui.onSpotClicked(this.play.bind(this));
}

PlayerVsPlayerGame.prototype.play = function(e) {
  this.ui.spotClicked(e, this.playerMarker);
  this.playerMarker = PlayerVsPlayerGame.prototype.switchMarker(this.playerMarker);
  this.ui.displayTurn(this.playerMarker);
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
