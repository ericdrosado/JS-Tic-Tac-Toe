var $ = require('jquery');

function UI() {
}

UI.prototype.updateBoard = function(e, playerMarker) {
  UI.prototype.disableClick(e);
  var id = UI.prototype.spotClicked(e);
  UI.prototype.displayMarker(id, playerMarker);
}

UI.prototype.disableClick = function(e){
  $(e.target).addClass("disabled").off("click");
}

UI.prototype.spotClicked = function(e) {
  var id = parseInt($(e.target).attr("id"));
  console.log("SPOT CLICKED WITH ID: " + id);
  return id;
}

UI.prototype.displayTurn = function(marker) {
  $("#turn-label").html(marker + "'s turn!");
}

UI.prototype.displayMarker = function(id, playerMarker) {
  $("#" + id).html(playerMarker);
}

module.exports = UI;
