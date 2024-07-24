'use strict'

// 1. Deklaration einer Funktion
let logTransformedName = (firstName, lastName) => {
    
    // Eingabe
    // firstname
    // lastName

    let rueckgabeWert // Hilfsvariable

    // Verarbeitung
    rueckgabeWert = `${lastName}, ${firstName.charAt(0)}.`

    // Ausgabe optisch
    //console.log(rueckgabeWert); // Ausgabe innerhalb der Funktion

    // Ausgabe datentechnisch
    return rueckgabeWert
}



// 2. Aufruf der Funktion
let wert // Value of defined

logTransformedName('Ladislaus', 'Jones') // => 'Jones, L.'
console.log("Hallo " + wert)

// ? gib mir noch mal bitte schnell dieses 'Jones, L.' und verändere entwas daran "Hallo" soll davor stehen
// "Hallo Jones, L."

wert = logTransformedName('Jens', 'Simon') // => 'Simon, J.'
console.log("Hello " + wert)
// "Hello Simon. J."