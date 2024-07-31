'use strict';

// Wiederholungen - Iterationen

// Array - High-Order-Funktion - Wiederholung vom 1. bis letzen ArrayElement

// Kontrollstrukturen - Schleife / loop
// for-loop , while-loop, do-while-for , foreach-loop

// Rekursion
// Funktion

const tueEtwas = () => {
    console.log("hallo")
    tueEtwas()
}

// tueEtwas()
// tueEtwas()
// tueEtwas()
// tueEtwas()
// tueEtwas()
// const ermittlePreis = () => {

//     const preis = Number(prompt("Gib bitte einen Preis"))
//     if (preis <= 0) {
//         console.log("Vorsicht! Du einen negativen Preis eingeben!")
//         return ermittlePreis()
//     }

//     return preis

// }

// console.log(ermittlePreis())

// 2 Beispiel
// *************
// ***
// *

const printLine = (anzahl) => {
    let str = ''
    for (let i = 0; i < anzahl; i++)
        str += '*'
    console.log(str)
}
// printLine(4)
// printLine(7)
// printLine(14)

const linie = (anzahl, buchstaben) => 
     (anzahl == 0) ? '' : linie(anzahl - 1, buchstaben) + buchstaben
    
    


console.log(linie('3', "*"))
console.log(linie(3, "*"))
console.log(linie(3, "*"))

const rectangle = (width, height, character) =>
    (height === 0)
        ? ''
        : `${rectangle(width, height - 1, character)}\n${line(
              width,
              character,
          )}`;

const line = (length, character) =>
    length === 0 ? '' : line(length - 1, character) + character;

console.log(rectangle('50', '12', '💚'));

