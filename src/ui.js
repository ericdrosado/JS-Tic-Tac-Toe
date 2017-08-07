var $ = require('jquery');

function UI() {
  this.playerMarker = ""
}

UI.prototype.displayTurn = function(marker) {
  $("#turn-label").html(marker + "'s turn!");
  this.playerMarker = marker;
}

UI.prototype.makeMove = function(marker) {
  $("#turn-label").html(marker + "'s turn!");
}

UI.prototype.listenForSpotClick = function(spotClicked) {
  this.callOnElementClick(".spot", spotClicked);
}

UI.prototype.callOnElementClick = function(element, callback) {
  $(element).on("click", (e) => {
    var id = callback(e);
    UI.prototype.displayMarker(id, this.playerMarker);
  });
}

UI.prototype.displayMarker = function(id, marker) {
  $("#" + id).html(marker);
}

module.exports = UI;
