var $ = require('jquery');
var UI = require('../src/ui');

describe("UI", function() {
  beforeEach(function() {
    ui = new UI();
    jasmine.getFixtures().fixturesPath = '../partials/'
    jasmine.getFixtures().load('game.html');
  });

  describe("#Game", function(){
    it("display the turn if it's Xs turn", function() {
      ui.displayTurn("X");
      expect($("#turn-label")).toHaveText("X wins!!");
    });

    it("display the turn if it's W's turn", function() {
      ui.displayTurn("W");
      expect($("#turn-label")).toHaveText("W wins!!");
    });

  });
});
