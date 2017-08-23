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
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      // locations = ship.locations;
      var index = ship.locations.indexOf(guess); //not "-1" if found
      if (index >= 0) { //hit!
        ships.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("Trafiony!")
        if (this.isSunk(ship)) {
          wiev.displayMessage("Zatopiłeś mój okręt!!")
          shipSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("Pudło!");
    return false;
  },
  isSunk: function(ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
      return true;
    }
  }
}

model.fire("21");
model.fire("51");
model.fire("45");
model.fire("52");
model.fire("24");
