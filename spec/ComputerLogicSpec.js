var ComputerLogic = require ('../src/ComputerLogic');

describe("ComputerLogic", function() {

  beforeEach(function() {
    computerLogic = new ComputerLogic();
  });

  describe("#getMove", function() {
    it("will return the board", function() {
      var gameBoard = ["0","1","2","3","4","5","6","7","8"];
      expect(computerLogic.getMove(gameBoard)).toEqual(["0","1","2","3","4","5","6","7","8"]);
    });
  });

  describe("#chooseAvailableSpace", function() {
    it("will return an available space", function() {
      var gameBoard = ["0","1","2","3","4","5","6","7","8"];
      expect(computerLogic.chooseAvailableSpace(gameBoard)).toEqual(gameBoard[0]);
    });
    it("will return the next available space", function() {
      var gameBoard = ["X","O","2","3","4","5","6","7","8"];
      expect(computerLogic.chooseAvailableSpace(gameBoard)).toEqual(gameBoard[2]);
    });
  });

  describe("#getScore", function() {
    it("will return a score of '0' if player doesn't win", function() {
      expect(computerLogic.getScore("X", false)).toEqual(0);
    });
    it("will return a score of '0' if computer doesn't win", function() {
      expect(computerLogic.getScore("O", false)).toEqual(0);
    });
    it("will return a score of '10' if the player wins", function() {
      expect(computerLogic.getScore("X", true)).toEqual(10);
    });
    it("will return a score of '-10' if the computer wins", function() {
      expect(computerLogic.getScore("O", true)).toEqual(-10);
    });
  });

});
