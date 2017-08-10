var $ = require('jquery');
var PlayerVsPlayerGame = require('./games/PlayerVsPlayerGame');
var UI = require('./ui');

var TicTacToe = function() {
}

TicTacToe.prototype.main = function() {
  this.ui = new UI();
  this.game = new PlayerVsPlayerGame(this.ui);
  this.game.initializeGame();
}

module.exports = TicTacToe;
