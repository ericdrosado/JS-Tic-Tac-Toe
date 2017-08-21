var $ = require('jquery');
var HandlebarsCompiler = require('./HandlebarsCompiler');
var TicTacToe = require('./TicTacToe');

$(document).ready(function() {
  const ticTacToe = new TicTacToe();
  var compiler = new HandlebarsCompiler();
  var gameType = compiler.load("menu", ticTacToe.menu);
});
