function PlayerVsPlayerGame(ui) {
  this.ui = ui;
}

PlayerVsPlayerGame.prototype.play = function() {
  this.ui.displayTurn("X");
}




module.exports = PlayerVsPlayerGame;
