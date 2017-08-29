var ComputerLogic = require ('../src/ComputerLogic');

describe("ComputerLogic", function() {

  beforeEach(function() {
    computerLogic = new ComputerLogic();
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
