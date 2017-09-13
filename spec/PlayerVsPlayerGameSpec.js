var $ = require('jquery');
var GameBoard = require('../src/GameBoard');
var PlayerVsPlayerGame = require('../src/games/PlayerVsPlayerGame');
var UI = require('../src/UI');
var WinConditions = require('../src/WinConditions');

describe("PlayerVsPlayerGame", function() {

  beforeEach(function() {
    gameBoard = new GameBoard();
    ui = new UI();
    winConditions = new WinConditions();
    game = new PlayerVsPlayerGame(ui, gameBoard, winConditions);
    jasmine.getFixtures().fixturesPath = '../partials/'
    jasmine.getFixtures().load('game.html');
  });

  describe("#play", function(){
    it("will display a marker after a location has been chosen", function() {
      game.initializeGame();
      $(".spot").attr({id: "0"}).trigger("click");
      expect($("#0").text()).toEqual("X");
    });
    it("will add the second player marker to the gameboard after the first player", function() {
      game.initializeGame();

      $("#0").trigger("click");
      expect($("#0").html()).toEqual("X");

      $("#1").trigger("click");
      expect($("#1").html()).toEqual("O");
    });
  });

});
