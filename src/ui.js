var $ = require('jquery');

function UI() {
}

UI.prototype.displayTurn = function(marker) {
  $("#turn-label").html(marker + "'s turn!");
}

UI.prototype.onSpotClicked = function(callback) {
  $(".spot").on("click", (e) => {
    callback(e);
  });
}

UI.prototype.spotClicked = function(e, playerMarker) {
  var id = parseInt($(e.target).attr("id"));
  UI.prototype.disableClick(e);
  UI.prototype.displayMarker(id, playerMarker);
  console.log("SPOT CLICKED WITH ID: " + id);
}

UI.prototype.disableClick = function(e){
  $(e.target).addClass("disabled").off("click");
}

UI.prototype.displayMarker = function(id, playerMarker) {
  $("#" + id).html(playerMarker);
}

module.exports = UI;
