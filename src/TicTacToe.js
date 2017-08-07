var $ = require('jquery');
var PlayerVsPlayerGame = require('./games/PlayerVsPlayerGame');
var UI = require('./ui');

var TicTacToe = function() {
}

TicTacToe.prototype.main = function() {
  this.ui = new UI();
  this.game = new PlayerVsPlayerGame(this.ui);
  this.game.play(TicTacToe.prototype.spotClicked);
}

TicTacToe.prototype.spotClicked = function(e) {
  var id = parseInt($(e.target).attr("id"));
  console.log("SPOT CLICKED WITH ID: " + id);
  return id;
}

module.exports = TicTacToe;
