function Player(playerLives, playerDamage) {
    let lives = playerLives;
    let damage = playerDamage;
    const validKoordinates = function (x, y) {
        /* validates Coordinates */
        return true // von mir hinugefügt ,damit das einigermassen funktioniert!
    };
    const calculatePath = function (x, y) {
        /* calculates the path to (x, y) */
    };
    const move = function (path) {
        /* moves the character along the path */
        console.log("in move() den this-Kontext prüfen: this=",this)
    };

    console.log("in moveToPosition() den this-Kontext prüfen: this=",this)
    this.moveToPosition = function (x, y) {
        if (!validKoordinates(x, y)) return;
        const path = calculatePath(x, y);
        move(path);
    };
}

// von mir hinzugefügt

// alles wie im Beispiel vorher !
// "ready player one?" ;-)
const player1 = new Player(5, 0) // 5 Leben und 0% damage
player1.moveToPosition(12, 42)

// test ob die inneren Funktionen auch direkt nutzbar sind:
player1.move(12, 42) // TypeError: player1.move is not a function

// Super das geht zum Glück nicht, sonst kämen wir ja am Validator vorbei!!
// move() ist halt nur eine Funktion  und keine zum Objekt aufrufbare Methode!
// Die einzige Methode ist moveToPosition()