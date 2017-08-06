var $ = require('jquery');

function UI() {
  var playerMarker = ""
}

UI.prototype.displayTurn = function(marker) {
  $("#turn-label").html(marker + "'s turn!");
  playerMarker = marker;
}

UI.prototype.makeMove = function(marker) {
  $("#turn-label").html(marker + "'s turn!");
}

UI.prototype.listenForSpotClick = function(spotClicked) {
  this.callOnElementClick(".spot", spotClicked);
}

UI.prototype.callOnElementClick = function(element, callback) {
  $(element).on("click", function(e) {
    var id = callback(e);
    UI.prototype.displayMarker(id, playerMarker);
  });
}

UI.prototype.displayMarker = function(id, playerMarker) {
  $("#" + id).html(playerMarker);
}

module.exports = UI;
