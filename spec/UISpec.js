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

    it("can display a marker when a spot is clicked", function() {
      ui.listenForSpotClick(function(e){$(e.target).html("X")});
      $("#0").trigger("click");
      expect($("#0")).toHaveText("X");
    });
    
  });
});
