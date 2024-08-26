class Player {
    // private # Attribute
    #lives; // verstecken ausserhalb der Klasse, im Objekt
    #damage;
    #validKoordinates;
    #calculatePath;
    #move;
    constructor(lives, damage) {
      this.#lives = lives;
      this.#damage = damage;
      this.#validKoordinates = function (x, y) {
        /* validates Coordinates */
      };
      this.#calculatePath = function (x, y) {
        /* calculates the path to (x, y) */
      };
      this.#move = function (path) {
        /* moves the character along the path */
      };
    }
  
    moveToPosition(x, y) {
      if (!validKoordinates(x, y)) return;
      const path = calculatePath(x, y);
      move(path);
    }

    wieVieleLebenHabeIch(){
      console.log(this.#lives)
    }
    erhoeheLeben(lebenAnzahl){
      if (lebenAnzahl<=100)
        this.#lives =lebenAnzahl

    }
  }
  
  const player = new Player(100, 15); // 100 Leben
  player.wieVieleLebenHabeIch()
  console.log('player --->', player);
  player.lives = 1000000
  
  console.log('player --->', player);
  player.wieVieleLebenHabeIch()

  if (10000<100)
    player.erhoeheLeben(100000)
 
 
 
 
  player.wieVieleLebenHabeIch()
  player.erhoeheLeben(23)
  player.wieVieleLebenHabeIch()
// von mir hinzugefügt
  
// wechselweise aktivieren um die verschiedenen Reaktionen zu sehen!
  
  // player.move(); // player.move is not a function
//   player.#move(); // SyntaxError: Private name #move is not defined
  
//   console.log(player.lives); // undefined
//   console.log(player.#lives); // SyntaxError: Private name #lives is not defined
  