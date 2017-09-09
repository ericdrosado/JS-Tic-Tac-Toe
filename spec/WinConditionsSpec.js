var WinConditions = require('../src/WinConditions');

describe("WinConditions", function() {
  var winConditions;

  beforeEach(function() {
    winConditions = new WinConditions();
  });

  describe("#isWinner", function() {
    it("will return true if player has three in a row", function() {
      var board = ["X","X","X","O","O","5","6","7","8"];
      expect(winConditions.isWinner(board)).toBe(true);
    });
    it("will return true if player has three in a row", function() {
      var board = ["X","X","O","X","X","O","6","7","O"];
      expect(winConditions.isWinner(board)).toBe(true);
    });
    it("will return false if player does not have three in a row", function() {
      var board = ["X","O","X","X","4","O","6","7","8"];
      expect(winConditions.isWinner(board)).toBe(false);
    });
    it("will return false if player does not have three in a row", function() {
      var board = ["X","O","2","3","4","O","X","7","X"];
      expect(winConditions.isWinner(board)).toBe(false);
    });
  });

  describe("#winHorizontalTop", function() {
    it("will return true if player has three in a row in top horizontal", function() {
      var board = ["X","X","X","O","4","O","6","7","8"];
      expect(winConditions.winHorizontalTop(board)).toBe(true);
    });
    it("will return true if player has three in a row in top horizontal", function() {
      var board = ["O","O","O","X","4","X","X","7","X"];
      expect(winConditions.winHorizontalTop(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in top horizontal", function() {
      var board = ["O","1","2","X","X","X","6","O","8"];
      expect(winConditions.winHorizontalTop(board)).toBe(false);
    });
    it("will return false if player does not have three in a row in top horizontal", function() {
      var board = ["0","X","O","X","X","X","O","O","8"];
      expect(winConditions.winHorizontalTop(board)).toBe(false);
    });
  });

  describe("#winHorizontalMiddle", function() {
    it("will return true if player has three in a row in middle horizontal", function() {
      var board = ["0","O","2","X","X","X","O","7","8"];
      expect(winConditions.winHorizontalMiddle(board)).toBe(true);
    });
    it("will return true if player has three in a row in middle horizontal", function() {
      var board = ["X","1","X","O","O","O","X","X","8"];
      expect(winConditions.winHorizontalMiddle(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in middle horizontal", function() {
      var board = ["X","X","X","3","4","5","6","7","8"];
      expect(winConditions.winHorizontalMiddle(board)).toBe(false);
    });
    it("will return false if player does not have three in a row in middle horizontal", function() {
      var board = ["X","O","X","O","X","5","6","7","8"];
      expect(winConditions.winHorizontalMiddle(board)).toBe(false);
    });
  });

  describe("#winHorizontalBottom", function() {
    it("will return true if player has three in a row in bottom horizontal", function() {
      var board = ["0","O","2","3","O","5","X","X","X"];
      expect(winConditions.winHorizontalBottom(board)).toBe(true);
    });
    it("will return true if player has three in a row in bottom horizontal", function() {
      var board = ["X","X","2","X","X","5","O","O","O"];
      expect(winConditions.winHorizontalBottom(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in bottom horizontal", function() {
      var board = ["X","X","X","O","4","O","6","7","8"];
      expect(winConditions.winHorizontalBottom(board)).toBe(false);
    });
    it("will return false if player does not have three in a row in bottom horizontal", function() {
      var board = ["O","O","O","3","X","X","6","X","X"];
      expect(winConditions.winHorizontalBottom(board)).toBe(false);
    });
  });

  describe("#winVerticalLeft", function() {
    it("will return true if player has three in a row in vertical left", function() {
      var board = ["X","1","2","X","4","5","X","7","8"];
      expect(winConditions.winVerticalLeft(board)).toBe(true);
    });
    it("will return true if player has three in a row in vertical left", function() {
      var board = ["O","X","X","O","X","5","O","7","X"];
      expect(winConditions.winVerticalLeft(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in vertical left", function() {
      var board = ["O","O","O","3","X","X","X","X","8"];
      expect(winConditions.winVerticalLeft(board)).toBe(false);
    });
    it("will return false if player does not have three in a row in vertical left", function() {
      var board = ["X","X","X","O","4","O","O","O","8"];
      expect(winConditions.winVerticalLeft(board)).toBe(false);
    });
  });

  describe("#winVerticalMiddle", function() {
    it("will return true if player has three in a row in vertical middle", function() {
      var board = ["0","X","2","3","X","5","6","X","8"];
      expect(winConditions.winVerticalMiddle(board)).toBe(true);
    });
    it("will return true if player has three in a row in vertical middle", function() {
      var board = ["X","O","X","X","O","X","6","O","8"];
      expect(winConditions.winVerticalMiddle(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in vertical middle", function() {
      var board = ["O","O","X","X","X","5","6","7","8"];
      expect(winConditions.winVerticalMiddle(board)).toBe(false);
    });
    it("will return false if player does not have three in a row in vertical middle", function() {
      var board = ["1","X","X","X","X","5","O","O","O"];
      expect(winConditions.winVerticalMiddle(board)).toBe(false);
    });
  });

  describe("#winVerticalRight", function() {
    it("will return true if player has three in a row in vertical right", function() {
      var board = ["0","O","X","3","O","X","6","7","X"];
      expect(winConditions.winVerticalRight(board)).toBe(true);
    });
    it("will return true if player has three in a row in vertical right", function() {
      var board = ["0","1","O","X","X","O","X","X","O"];
      expect(winConditions.winVerticalRight(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in vertical right", function() {
      var board = ["X","X","X","O","O","5","6","7","8"];
      expect(winConditions.winVerticalRight(board)).toBe(false);
    });
    it("will return false if player does not have three in a row in vertical right", function() {
      var board = ["O","O","3","X","X","X","6","7","8"];
      expect(winConditions.winVerticalRight(board)).toBe(false);
    });
  });

  describe("#winDiagonalBackwards", function() {
    it("will return true if player has three in a row in backwards diagonal", function() {
      var board = ["X","O","O","3","X","5","6","7","X"];
      expect(winConditions.winDiagonalBackwards(board)).toBe(true);
    });
    it("will return true if player has three in a row in backwards diagonal", function() {
      var board = ["O","X","X","3","O","X","X","7","O"];
      expect(winConditions.winDiagonalBackwards(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in backwards diagonal", function() {
      var board = ["X","X","X","3","4","5","6","O","O"];
      expect(winConditions.winDiagonalBackwards(board)).toBe(false);
    });
    it("will return false if player does not have three in a row in backwards diagonal", function() {
      var board = ["O","X","X","O","X","X","O","7","8"];
      expect(winConditions.winDiagonalBackwards(board)).toBe(false);
    });
  });

  describe("#winDiagonalForwards", function() {
    it("will return true if player has three in a row in forward diagonal", function() {
      var board = ["0","1","X","3","X","5","X","7","8"];
      expect(winConditions.winDiagonalForwards(board)).toBe(true);
    });
    it("will return true if player has three in a row in forward diagonal", function() {
      var board = ["0","1","O","X","O","X","O","X","X"];
      expect(winConditions.winDiagonalForwards(board)).toBe(true);
    });
    it("will return false if player does not have three in a row in forward diagonal", function() {
      var board = ["X","X","X","3","4","O","O","7","8"];
      expect(winConditions.winDiagonalForwards(board)).toBe(false);
    });
    it("will return false if player does not have three in a row in forward diagonal", function() {
      var board = ["X","2","O","X","O","5","X","7","8"];
      expect(winConditions.winDiagonalForwards(board)).toBe(false);
    });
  });
});
