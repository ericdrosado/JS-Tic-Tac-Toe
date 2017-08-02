function MockUI() {
  this.statusText = "";
}

MockUI.prototype.displayTurn = function(marker) {
  this.statusText =  marker + "'s Turn!"
}

module.exports = MockUI;
