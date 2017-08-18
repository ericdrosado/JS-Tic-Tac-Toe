var $ = require('jquery');
var HandlebarsCompiler = require('./HandlebarsCompiler');
var TicTacToe = require('./TicTacToe');

$(document).ready(function() {
  this.ticTacToe = new TicTacToe();
  var compiler = new HandlebarsCompiler();
  var gameType = compiler.load("menu",TicTacToe.prototype.menu);
});
