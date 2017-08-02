var $ = require('jquery');

function UI() {
}

UI.prototype.displayTurn = function(marker) {
  $("#turn-label").html(marker + "'s turn!");
}

UI.prototype.listenForSpotClick = function(makeMove) {
  this.callOnElementClick(".spot", makeMove);
}

UI.prototype.callOnElementClick = function(element, callback) {
  $(element).on("click", function(e) {
    callback(e);
  });
}

module.exports = UI;
