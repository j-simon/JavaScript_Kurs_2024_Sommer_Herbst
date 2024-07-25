'use strict'

// aus ue36 - Funktion ,die nur die Eingangssituation - Parameter

// 1. Deklaration
let logTransformedNameWbt = (firstName, lastName) =>
    `${lastName}, ${firstName.charAt(0)}.`


let logTransformedName = (firstName, lastName) => {
    // Wächter  - early return
    if (firstName === "" && lastName === "") return "Fehler im Vornamen und Nachnamen"

    if (firstName === "") return "Fehler im Vornamen"

    if (lastName === "") return "Fehler im Nachnamen"

    return `${lastName}, ${firstName.charAt(0)}.`
}


// 2. Aufruf
let rueckgabe = logTransformedNameWbt('Ladislaus', 'Jones')
console.log(rueckgabe)

rueckgabe = logTransformedName('Jens', 'Simon')
console.log(rueckgabe)

rueckgabe = logTransformedName('Anne', 'Müller')
console.log(rueckgabe)

rueckgabe = logTransformedName('', 'Müller')
console.log(rueckgabe)

rueckgabe = logTransformedName('Anne', '')
console.log(rueckgabe)

rueckgabe = logTransformedName('', '')
console.log(rueckgabe)



