var $ = require('jquery');
var UI = require('./ui');
var PlayerVsPlayerGame = require('./games/PlayerVsPlayerGame');

var TicTacToe = function() {
}

TicTacToe.prototype.main = function() {
  this.ui = new UI();
  this.ui.listenForSpotClick(TicTacToe.prototype.spotClicked);
  this.game = new PlayerVsPlayerGame(ui);
  this.game.play();
}

TicTacToe.prototype.spotClicked = function(e) {
  var id = parseInt($(e.target).attr("id"));
  console.log("SPOT CLICKED WITH ID: " + id);
  return id;
}


module.exports = TicTacToe;
