'use strict';
console.log('Jens')
console.log("Simon")
console.log('Jens Simon')

let vorname=prompt("Bitte Vorname eingeben:")
let nachname=prompt("Bitte Nachname eingeben:")
console.log(vorname)
console.log(nachname)
//console.log(vorname nachname)

// String Konkatenation/Verkettung
console.log(vorname +  " " + nachname)

// Template String
console.log(`Mein Vorname ist ${vorname},\nmein Nachname ist ${nachname}.`)
// identische Ausgabe mit Konkatenationsoperator
console.log('Mein Vorname ist ' + vorname + ',\nmein Nachname ist ' + nachname +'.')

// Text Darstellung, Textfluss Zeilenumbruch \n Steuerzeichen
console.log("c:\\users\\student\\liesmich.txt")