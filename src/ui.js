var $ = require('jquery');

function UI() {
}

UI.prototype.spotClicked = function(e) {
  var id = parseInt($(e.target).attr("id"));
  console.log("SPOT CLICKED WITH ID: " + id);
  return id;
}

UI.prototype.displayTurn = function(marker) {
  $("#turn-label").html(marker + "'s turn!");
  return marker;
}

UI.prototype.displayMarker = function(id, playerMarker) {
  $("#" + id).html(playerMarker);
}

module.exports = UI;
