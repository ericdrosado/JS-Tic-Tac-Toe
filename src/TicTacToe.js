var $ = require('jquery');
var GameBoard = require('./GameBoard');
var PlayerVsPlayerGame = require('./games/PlayerVsPlayerGame');
var UI = require('./ui');
var WinConditions = require('./WinConditions');

var TicTacToe = function() {
}

TicTacToe.prototype.main = function() {
  this.ui = new UI();
  this.GameBoard = new GameBoard();
  this.WinConditions = new WinConditions();
  this.game = new PlayerVsPlayerGame(this.ui, this.GameBoard, this.WinConditions);
  this.game.initializeGame();
}

module.exports = TicTacToe;
