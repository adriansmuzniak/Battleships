//Gra w okręty - początek

// położenie okrętu
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

// próby zatopienia okrętu
var guess; //wskazanie do sprawdzenia
var guesses = 0; //liczba prób
var hits = 0; //trafione

//wartość - czy okręt został zatopiony?
var isSunk = false;

  while (isSunk == false) {
      guess = prompt("Gotów? Cel, pal! (podaj liczbę z zakresu 0-6):");
      if (guess < 0 || guess > 6) {
          alert("Proszę podać prawidłową liczbę z zakresu od 0-6!");
      } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
          hits = hits + 1;
          alert("TRAFIONY!!");
          if (hits == 3) {
            isSunk == true;
            confirm("Hej, zatopiłeś mój okręt!");
            var stats = "Potrzebowałeś " + guesses + " ruchów, aby zatopić okręt. Twoja efektywność strzelecka wynosi: " + (3/guesses) + ".";
            alert(stats);
          }
        } else if (guess == null || guess == false) {
          alert("Ej, podaj jakąś liczbę")
        } else {
          alert("PUDŁO!")
        }
      }
  }
