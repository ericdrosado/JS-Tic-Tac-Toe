var $ = require('jquery');

function UI() {
  var playerMarker = ""
}

UI.prototype.displayTurn = function(marker) {
  $("#turn-label").html(marker + "'s turn!");
  playerMarker = marker;
}

UI.prototype.listenForSpotClick = function(spotClicked) {
  this.callOnElementClick(".spot", spotClicked);
}

UI.prototype.callOnElementClick = function(element, callback) {
  $(element).on("click", function(e) {
    var id = callback(e);
    UI.prototype.displayMarker(id, playerMarker);
    playerMarker = UI.prototype.switchMarker(playerMarker);
    UI.prototype.displayTurn(playerMarker);
  });
}

UI.prototype.displayMarker = function(id, playerMarker) {
  $("#" + id).html(playerMarker);
}

UI.prototype.switchMarker = function(playerMarker) {
  if (playerMarker == "X") {
    playerMarker = "O";
  } else {
    playerMarker = "X";
  }
  return playerMarker;
}

module.exports = UI;
