var $ = require('jquery')

function PlayerVsPlayerGame(ui) {
  this.ui = ui;
}

PlayerVsPlayerGame.prototype.play = function(callback) {
  var playerMarker = this.ui.displayTurn("X");
  $(".spot").on("click", (e) => {
    var id = callback(e);
    this.ui.displayMarker(id, playerMarker);
    playerMarker = PlayerVsPlayerGame.prototype.switchMarker(playerMarker);
    this.ui.displayTurn(playerMarker);
  });
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
