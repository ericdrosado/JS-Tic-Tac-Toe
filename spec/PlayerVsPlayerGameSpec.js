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
  });
});
