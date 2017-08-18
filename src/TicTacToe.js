var $ = require('jquery');
var ComputerLogic = require('./ComputerLogic');
var GameBoard = require('./GameBoard');
var HandlebarsCompiler = require('./HandlebarsCompiler');
var PlayerVsComputerGame = require('./games/PlayerVsComputerGame');
var PlayerVsPlayerGame = require('./games/PlayerVsPlayerGame');
var UI = require('./ui');
var WinConditions = require('./WinConditions');

var TicTacToe = function() {
}

TicTacToe.prototype.menu = function() {
  this.ui = new UI();
  this.ui.onButtonClicked(TicTacToe.prototype.determineGameType);
}

TicTacToe.prototype.determineGameType = function(e) {
  this.ui = new UI();
  var compiler = new HandlebarsCompiler();
  var id = this.ui.menuButtonClicked(e);
  if (id === "PvP") {
    compiler.load("game", TicTacToe.prototype.playerVsPlayerGame);
  } else {
    compiler.load("game", TicTacToe.prototype.playerVsComputerGame);
  }
}

TicTacToe.prototype.playerVsPlayerGame = function() {
  this.ui = new UI();
  this.GameBoard = new GameBoard();
  this.WinConditions = new WinConditions();
  this.game = new PlayerVsPlayerGame(this.ui, this.GameBoard, this.WinConditions);
  this.game.initializeGame();
}

TicTacToe.prototype.playerVsComputerGame = function() {
  this.ComputerLogic = new ComputerLogic();
  this.ui = new UI();
  this.GameBoard = new GameBoard();
  this.WinConditions = new WinConditions();
  this.game = new PlayerVsComputerGame(this.ComputerLogic, this.ui, this.GameBoard, this.WinConditions);
  this.game.initializeGame();
}

module.exports = TicTacToe;
