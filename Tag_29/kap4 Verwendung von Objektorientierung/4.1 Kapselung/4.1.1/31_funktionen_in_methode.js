class Player {
  constructor(lives, damage) {
    this.lives = lives;
    this.damage = damage;
  }

  moveToPosition(x, y) {
     validCoordinates= (x, y) => {
      /* validates Coordinates */
      return true // von mir hinugefügt ,damit das einigermassen funktioniert!
    }

    function calculatePath(x, y) {
      /* calculates the path to (x, y) */
    }

     move = (path)=> {
      console.log("in move() den this-Kontext prüfen: this=", this)
      /* moves the character along the path */
    }

    console.log("in moveToPosition() den this-Kontext prüfen: this=", this)
    if (!validCoordinates(x, y)) return;
    const path = calculatePath(x, y);
    move(path);
  }
}

// von mir hinzugefügt

// "ready player one?" ;-)
const player1 = new Player(5, 0) // 5 Leben und 0% damage
player1.lives=1000
player1.moveToPosition(12, 42)

// test ob die inneren Funktionen auch direkt nutzbar sind:
player1.move(12, 42) // TypeError: player1.move is not a function
player1.move()
// Super das geht zum Glück nicht, sonst kämen wir ja am Validator vorbei!!
// move() ist halt nur eine Funktion  und keine zum Objekt aufrufbare Methode!
// Die einzige Methode ist moveToPosition()