var $ = require('jquery');
var UI = require('./ui');
var HandlebarsCompiler = require('./HandlebarsCompiler');
var TicTacToe = require('./TicTacToe');

$(document).ready(function() {
  var compiler = new HandlebarsCompiler();
  compiler.load("game",TicTacToe.prototype.main);
});
