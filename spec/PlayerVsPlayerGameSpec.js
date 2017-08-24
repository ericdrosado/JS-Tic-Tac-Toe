var $ = require('jquery');
var GameBoard = require('../src/GameBoard');
var PlayerVsPlayerGame = require('../src/games/PlayerVsPlayerGame');
var UI = require('../src/ui');
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
      var marker = "X";
      var id;
      var gameBoardSpots = ["0","1","2","3","4","5","6","7","8"];
      testPlay = function(e) {
        id = ui.spotClicked(e, marker);
        gameBoardSpots[id] = marker;
        marker = gameBoard.switchMarker(marker);
      }
      
      ui.onSpotClicked(testPlay);
      $(".spot").attr({id: "0"}).trigger("click");
      expect(gameBoardSpots[0]).toEqual("X");

      ui.onSpotClicked(testPlay);
      $(".spot").attr({id: "1"}).trigger("click");
      expect(gameBoardSpots[1]).toEqual("O");
    });
  });

});
