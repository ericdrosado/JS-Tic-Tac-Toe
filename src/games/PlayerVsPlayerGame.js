var $ = require('jquery');

function PlayerVsPlayerGame(ui) {
  this.ui = ui;
}

PlayerVsPlayerGame.prototype.play = function() {
  var playerMarker = "X";
  this.ui.displayTurn("X");
  $(".spot").on("click", (e) => {
    this.ui.updateBoard(e, playerMarker);
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
