//Battleship Game

var view = {
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
}

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("32");
view.displayMiss("43");
view.displayHit("26");
view.displayMessage("Sink my ship ");
