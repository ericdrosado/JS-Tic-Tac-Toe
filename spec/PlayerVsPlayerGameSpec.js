var MockUI = require('./mocks/MockUI');
var PlayerVsPlayerGame = require('../src/games/PlayerVsPlayerGame');

describe("PlayerVsPlayerGame", function() {
  var mockUI;
  var game;

  beforeEach(function() {
    mockUI = new MockUI();
    game = new PlayerVsPlayerGame(mockUI);
  });

  describe("play", function() {

    beforeEach(function() {
      game.play();
    });

    it ("can display the current players turn", function() {
      expect(mockUI.statusText).toEqual("X's Turn!");
    });

    it("can switch the player marker to be displayed", function() {
      var marker = "X";
      expect(game.switchMarker(marker)).toEqual("O");
    });
  });
});
