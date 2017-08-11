var $ = require('jquery');
var UI = require('../src/ui');

describe("UI", function() {
  beforeEach(function() {
    ui = new UI();
    jasmine.getFixtures().fixturesPath = '../partials/'
    jasmine.getFixtures().load('game.html');
  });

  describe("#displayTurn", function(){
    it("can display the turn if it's Xs turn", function() {
      ui.displayTurn("X");
      expect($("#turn-label")).toHaveText("X's turn!");
    });
  });
  describe("#disableClick", function() {
    it("will disable click event for an occupied spot so the marker in that position will not change", function() {
      ui.onSpotClicked(ui.disableClick);
      $("#0").trigger("click");
      expect($("#0")).toHaveClass("disabled");
    });
  });
  describe("#displayMarker", function() {
    it("can set the marker to be displayed after a spot is clicked", function() {
      ui.displayMarker("0", "X");
      expect($("#0")).toHaveText("X");
    });
  });
});
