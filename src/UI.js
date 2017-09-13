var $ = require('jquery');

function UI() {
}

UI.prototype.displayTurn = function(marker) {
  $("#turn-label").html(marker + "'s turn!");
}

UI.prototype.displayWin = function(marker) {
  $("#turn-label").html(marker + " Wins!");
  UI.prototype.disableAllClicks();
}

UI.prototype.displayTie = function() {
  $("#turn-label").html("Tie Game!");
}

UI.prototype.onSpotClicked = function(callback) {
  $(".spot").on("click", function(e) {
    callback(e);
  });
}

UI.prototype.spotClicked = function(e, playerMarker) {
  var id = parseInt($(e.target).attr("id"));
  UI.prototype.disableClick(e);
  UI.prototype.displayMarker(id, playerMarker);
  return id;
}

UI.prototype.onButtonClicked = function(callback, ui) {
  $(".button").on("click", function(e) {
    callback(e, ui);
  });
}

UI.prototype.menuButtonClicked = function(e) {
  var id = $(e.target).attr("id");
  return id;
}

UI.prototype.disableClick = function(e){
  $(e.target).addClass("disabled").off("click");
}

UI.prototype.disableClickWithID = function(id){
  $("#"+id).addClass("disabled").off("click");
}

UI.prototype.disableAllClicks = function () {
  $(".spot").addClass("disabled").off("click");
}

UI.prototype.displayMarker = function(id, playerMarker) {
  $("#" + id).html(playerMarker);
}

module.exports = UI;
