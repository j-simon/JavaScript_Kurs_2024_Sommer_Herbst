'use strict';


// NaN

// Eingabegroessen z.B. prompt

let alter = Number(prompt("Gib bitte Dein Alter an"))

console.log(alter) // => 12 NaN
console.log(typeof alter) // => number

// if (alter === NaN) { // falsch/verboten
if ( isNaN(alter)) {
    console.log("falsche Zahleneingabe")
} else {
    console.log("richtige Zahleneingabe")
}
