//Battleship Game


//View
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

//Model

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipSunk: 0,
  ships: [{ locations: ["10", "20", "30"], hits: ["", "", ""] },
    { locations: ["32", "33", "34"], hits: ["", "", ""] },
    { locations: ["63", "64", "65"], hits: ["", "", ""] }],
  fire: function(guess) {
    for (var i = 0; i <this.numShips; i++) {
      var ship = this.ships[i];
      locations = ship.locations;
      var index = locations.indexOf(guess); //not "-1" if found
      if (index >= 0) { //hit!
        ships.hits[index] = "hit";
        return true;
      }
    }
  }
}
