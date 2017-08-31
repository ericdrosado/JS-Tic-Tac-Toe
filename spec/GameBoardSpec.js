var GameBoard = require('../src/GameBoard');

describe("GameBoard", function() {
  var gameBoard;

  beforeEach(function() {
    gameBoard = new GameBoard();
  });

  describe("#getBoard", function() {
    it("will return an empty game board", function() {
      expect(gameBoard.getBoard()).toEqual(["0","1","2","3","4","5","6","7","8"]);
    });
    it("will return a game board with markers", function() {
      gameBoard.updateBoard(0, "X");
      gameBoard.updateBoard(2, "O");
      expect(gameBoard.getBoard()).toEqual(["X","1","O","3","4","5","6","7","8"]);
    });
  });

  describe("#updateBoard", function() {
    it("will return an updated board with a marker in the chosen id index", function() {
      gameBoard.updateBoard(0, "X");
      expect(gameBoard.getBoard()).toEqual(["X","1","2","3","4","5","6","7","8"]);
    });
    it("will return an updated board with a marker in the chosen id index", function() {
      var id = 1;
      var marker = "X";
      gameBoard.updateBoard(id, marker);
      expect(gameBoard.getBoard()).toEqual(["0","X","2","3","4","5","6","7","8"]);
    });
    it("will return an updated board with a marker in the chosen id index", function() {
      var id = 2;
      var marker = "O";
      gameBoard.updateBoard(id, marker);
      expect(gameBoard.getBoard()).toEqual(["0","1","O","3","4","5","6","7","8"]);
    });
    it("will return an updated board with a marker in the chosen id index", function() {
      var id = 3;
      var marker = "O";
      gameBoard.updateBoard(id, marker);
      expect(gameBoard.getBoard()).toEqual(["0","1","2","O","4","5","6","7","8"]);
    });
  });

  describe("#isBoardFull", function() {
    it("will return false if there is a space available on the board", function() {
      expect(gameBoard.isBoardFull()).toBe(false);
    });
    it("will return true if there is no space available on the board", function() {
      repeat = function(number, marker) {
        marker = gameBoard.switchMarker(marker);
        gameBoard.updateBoard(number, marker);
        if (number < 9) repeat(number + 1, marker);
      }
      repeat(1, "O");
      expect(gameBoard.isBoardFull()).toBe(true);
    });
  });

  describe("#switchMarker", function() {
    it("can switch the player marker to be displayed from X to O", function() {
      var marker = "X";
      expect(gameBoard.switchMarker(marker)).toEqual("O");
    });
    it("can switch the player marker to be displayed from O to X", function() {
      var marker = "O";
      expect(gameBoard.switchMarker(marker)).toEqual("X");
    });
  });
});
