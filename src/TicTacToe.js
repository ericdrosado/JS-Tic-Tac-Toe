var $ = require('jquery');
var PlayerVsPlayerGame = require('./games/PlayerVsPlayerGame');
var UI = require('./ui');
var GameBoard = require('./GameBoard');

var TicTacToe = function() {
}

TicTacToe.prototype.main = function() {
  this.ui = new UI();
  this.GameBoard = new GameBoard();
  this.game = new PlayerVsPlayerGame(this.ui, this.GameBoard);
  this.game.initializeGame();
}

module.exports = TicTacToe;
