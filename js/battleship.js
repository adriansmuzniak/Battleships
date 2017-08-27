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

  ships: [{ locations: ["10", "11", "12"], hits: ["", "", ""] },
    { locations: ["32", "33", "34"], hits: ["", "", ""] },
    { locations: ["63", "64", "65"], hits: ["", "", ""] }
  ],

  fire: function(guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      // locations = ship.locations;
      var index = ship.locations.indexOf(guess); //not "-1" if found

      if (ship.hits[index] === "hit") {
        view.displayMessage("Już wcześniej trafiłeś w to pole!");
        return true;
      } else if (index >= 0) { //hit!
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("Trafiony!");

        if (this.isSunk(ship)) {
          view.displayMessage("ZATOPIONY!!");
          this.shipSunk++;
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
  },

  generateShipLocations: function() {
    var locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },

  generateShip: function() {
    var direction = Math.floor(Math.random() * 2);
    var row, col;

    if (direction === 1) {
      //vertical
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    } else {
      //horizontal
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    var newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push((row + i) + "" + col);
      }
    }
    return newShipLocations;
  },

  collision: function() {

  },

}


// //test fire
// model.fire("21");
// model.fire("51");
// model.fire("45");
// model.fire("52");
// model.fire("24");

//Controller

var controller = {
  guessess: 0,
  processGuess: function(guess) {
    var location = parseGuess(guess);
    if (location) {
      this.guessess++;
      var hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage("Zatopiłeś wszystkie okęty, w " + this.guessess + " próbach.")
      }
    }
  }
};

function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  var smallAlphabet = ["a", "b", "c", "d", "e", "f", "g"];

  if (guess === null || guess.length !== 2) {
    alert("Proszę podać literę i cyfrę.")
  } else {
    firstChar = guess.charAt(0);
    var row;

    for (var i = 0; i < smallAlphabet.length; i++) {
      if (firstChar === smallAlphabet[i]) {
        row = smallAlphabet.indexOf(firstChar)
      }
    }

    for (var i = 0; i <alphabet.length; i++) {
      if (firstChar === alphabet[i]) {
        row = alphabet.indexOf(firstChar)
      }
    }

    // var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("To nie są współrzędne!")
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize ) {
      alert("To pole jest poza planszą!");
    } else {
      return row + column;
    }
  }
  return null;
}

// console.log(controller.processGuess("A0"));
// console.log(controller.processGuess("A6"));
// console.log(controller.processGuess("B6"));
// console.log(controller.processGuess("C6"));
// console.log(controller.processGuess("C4"));
// console.log(controller.processGuess("D4"));
// console.log(controller.processGuess("E4"));
// console.log(controller.processGuess("B0"));
// console.log(controller.processGuess("B1"));
// console.log(controller.processGuess("B2"));

function init() {
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeypress;
}

function handleKeypress(e) {
  var fireButton = document.getElementById('fireButton');
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

function handleFireButton() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value;
  controller.processGuess(guess);

  guessInput.value = "";
};

window.onload = init;
