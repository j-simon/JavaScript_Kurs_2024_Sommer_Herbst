'use strict'



// Die Formel zur Berechnung von Entfernungen lautet:





const distance = ({ x: yDestination, y: yOrigin }, { x: xDestination, y: xOrigin }) => {
    return Math.sqrt((yDestination - yOrigin) ** 2 + (xDestination - xOrigin) ** 2);
}

// Schreibe eine Funktion distance, die du z. B. folgendermaßen aufrufen kannst:

console.log(distance({ x: 1, y: 1 }, { x: 5, y: 1 })) // => 4


