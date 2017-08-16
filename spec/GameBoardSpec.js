var GameBoard = require('../src/GameBoard');

describe("GameBoard", function() {
  var gameBoard;

  beforeEach(function() {
    gameBoard = new GameBoard();
  });

  describe("#updateBoard", function() {
    it("will return an updated board with a marker in the chosen id index", function() {
      var id = 0;
      var marker = "X";
      expect(gameBoard.updateBoard(id, marker)).toEqual(["X","1","2","3","4","5","6","7","8"]);
    });
    it("will return an updated board with a marker in the chosen id index", function() {
      var id = 1;
      var marker = "X";
      expect(gameBoard.updateBoard(id, marker)).toEqual(["0","X","2","3","4","5","6","7","8"]);
    });
    it("will return an updated board with a marker in the chosen id index", function() {
      var id = 2;
      var marker = "O";
      expect(gameBoard.updateBoard(id, marker)).toEqual(["0","1","O","3","4","5","6","7","8"]);
    });
    it("will return an updated board with a marker in the chosen id index", function() {
      var id = 3;
      var marker = "O";
      expect(gameBoard.updateBoard(id, marker)).toEqual(["0","1","2","O","4","5","6","7","8"]);
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
