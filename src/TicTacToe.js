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
  this.ui.onButtonClicked(TicTacToe.prototype.determineGameType, this.ui);
}

TicTacToe.prototype.determineGameType = function(e, ui) {
  var game;
  this.gameBoard = new GameBoard();
  this.winConditions = new WinConditions();
  var id = ui.menuButtonClicked(e);
  if (id === "PvP") {
    game = new PlayerVsPlayerGame(ui, this.gameBoard, this.winConditions);
  } else {
      this.computerLogic = new ComputerLogic();
      game = new PlayerVsComputerGame(this.computerLogic, ui, this.gameBoard, this.winConditions);
  }
  var compiler = new HandlebarsCompiler();
  compiler.load("game", game.initializeGame);
}

module.exports = TicTacToe;
