var $ = require('jquery');
var UI = require('../src/ui');

describe("UI", function() {
  beforeEach(function() {
    ui = new UI();
    jasmine.getFixtures().fixturesPath = '../partials/'
    jasmine.getFixtures().load('game.html');
  });

  describe("#Game", function(){
    it("can display the turn if it's Xs turn", function() {
      ui.displayTurn("X");
      expect($("#turn-label")).toHaveText("X's turn!");
    });

    it("can set the marker to be displayed after a spot is clicked", function() {
      ui.displayMarker("0", "X");
      expect($("#0")).toHaveText("X");
    });
  });
});
