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


var ship1 = [{ locations: ["10", "20", "30"], hits: ["", "", ""] }];
var ship2 = [{ locations: ["32", "33", "34"], hits: ["", "", ""] }];
var ship3 = [{ locations: ["63", "64", "65"], hits: ["", "", ""] }];

var ships = [
  { locations: ["10", "20", "30"], hits: ["", "", ""] },
  { locations: ["32", "33", "34"], hits: ["", "hit", ""] },
  { locations: ["63", "64", "65"], hits: ["hit", "", ""] },
]

var statek = ships[1];
var locations = statek.locations;
console.log(locations[1]);

var statek2 = ships[2];
var hits = statek2.hits;
console.log(hits);
if (hits[0] === "hit") {
  console.log("bang!");
}

var statek3 = ships[0];
var hits = statek3.hits;
hits[2] = "hit";
console.log(statek3.hits);
