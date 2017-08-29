var ComputerLogic = require ('../src/ComputerLogic');

describe("ComputerLogic", function() {

  beforeEach(function() {
    computerLogic = new ComputerLogic();
  });

  describe("#getScore", function() {
    it("will return a score of '0' if player doesn't win", function() {
      expect(computerLogic.getScore("player", false)).toEqual(0);
    });
    it("will return a score of '0' if computer doesn't win", function() {
      expect(computerLogic.getScore("computer", false)).toEqual(0);
    });
    it("will return a score of '10' if the player wins", function() {
      expect(computerLogic.getScore("player", true)).toEqual(10);
    });
    it("will return a score of '-10' if the computer wins", function() {
      expect(computerLogic.getScore("computer", true)).toEqual(-10);
    });
  });

});
