var $ = require('jquery');

function PlayerVsPlayerGame(ui) {
  this.ui = ui;
  this.playerMarker = this.ui.displayTurn("X");
}

PlayerVsPlayerGame.prototype.play = function() {
  $(".spot").on("click", (e) => {
    $(e.target).off('click');
    var id = this.ui.spotClicked(e);
    this.ui.displayMarker(id, this.playerMarker);
    this.playerMarker = PlayerVsPlayerGame.prototype.switchMarker(this.playerMarker);
    this.ui.displayTurn(this.playerMarker);
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
