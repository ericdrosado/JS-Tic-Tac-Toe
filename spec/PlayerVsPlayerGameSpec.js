var MockUI = require('./mocks/MockUI');
var PlayerVsPlayerGame = require('../src/games/PlayerVsPlayerGame');

describe("PlayerVsPlayerGame", function() {
  var mockUI;
  var game;

  beforeEach(function() {
    mockUI = new MockUI();
    game = new PlayerVsPlayerGame(mockUI);
  });

  describe("#switchMarker", function() {
    it("can switch the player marker to be displayed", function() {
      var marker = "X";
      expect(game.switchMarker(marker)).toEqual("O");
    });
  });

  describe("#endGame", function() {
    it("will return true if player has three in a row", function() {
      var board = ["X","X","X","3","4","5","6","7","8"];
      expect(game.endGame(board)).toBe(true);
    });
    it("will return false if player does not have three in a row", function() {
      var board = ["0","1","2","3","4","5","6","7","8"];
      expect(game.endGame(board)).toBe(false);
    });
  });

  describe("#winHorizontalTop", function() {
    it("will return true if player has three in a row in top horizontal", function() {
      var board = ["X","X","X","3","4","5","6","7","8"];
      expect(game.winHorizontalTop(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in top horizontal", function() {
      var board = ["0","1","2","X","X","X","6","7","8"];
      expect(game.winHorizontalTop(board)).toBe(false);
    });
  });

  describe("#winHorizontalMiddle", function() {
    it("will return true if player has three in a row in middle horizontal", function() {
      var board = ["0","1","2","X","X","X","6","7","8"];
      expect(game.winHorizontalMiddle(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in middle horizontal", function() {
      var board = ["X","X","X","3","4","5","6","7","8"];
      expect(game.winHorizontalMiddle(board)).toBe(false);
    });
  });

  describe("#winHorizontalBottom", function() {
    it("will return true if player has three in a row in bottom horizontal", function() {
      var board = ["0","1","2","3","4","5","X","X","X"];
      expect(game.winHorizontalBottom(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in bottom horizontal", function() {
      var board = ["X","X","X","3","4","5","6","7","8"];
      expect(game.winHorizontalBottom(board)).toBe(false);
    });
  });

  describe("#winVerticalLeft", function() {
    it("will return true if player has three in a row in vertical left", function() {
      var board = ["X","1","2","X","4","5","X","7","8"];
      expect(game.winVerticalLeft(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in vertical left", function() {
      var board = ["X","X","X","3","4","5","6","7","8"];
      expect(game.winVerticalLeft(board)).toBe(false);
    });
  });

  describe("#winVerticalMiddle", function() {
    it("will return true if player has three in a row in vertical middle", function() {
      var board = ["0","X","2","3","X","5","6","X","8"];
      expect(game.winVerticalMiddle(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in vertical middle", function() {
      var board = ["X","X","X","3","4","5","6","7","8"];
      expect(game.winVerticalMiddle(board)).toBe(false);
    });
  });

  describe("#winVerticalRight", function() {
    it("will return true if player has three in a row in vertical right", function() {
      var board = ["0","1","X","3","4","X","6","7","X"];
      expect(game.winVerticalRight(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in vertical right", function() {
      var board = ["X","X","X","3","4","5","6","7","8"];
      expect(game.winVerticalRight(board)).toBe(false);
    });
  });

  describe("#winDiagonalBackwards", function() {
    it("will return true if player has three in a row in backwards diagonal", function() {
      var board = ["X","1","2","3","X","5","6","7","X"];
      expect(game.winDiagonalBackwards(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in backwards diagonal", function() {
      var board = ["X","X","X","3","4","5","6","7","8"];
      expect(game.winDiagonalBackwards(board)).toBe(false);
    });
  });

  describe("#winDiagonalForwards", function() {
    it("will return true if player has three in a row in forward diagonal", function() {
      var board = ["0","1","X","3","X","5","X","7","8"];
      expect(game.winDiagonalForwards(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in forward diagonal", function() {
      var board = ["X","X","X","3","4","5","6","7","8"];
      expect(game.winDiagonalForwards(board)).toBe(false);
    });
  });
});
