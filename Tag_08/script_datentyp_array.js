'use strict'

// Textliteral
'Jens'
console.log(typeof "Jens") // string

10.3 // 10 NaN
console.log(typeof 10.3) //  number

true
console.log(typeof true) // boolean

let vorname // wert undefined
console.log(typeof vorname) // Datentyp undefined

let fkt = () => {}
console.log(typeof fkt) // Datentyp function

// Datentyp Array
let vornamen = [ `Jens`, "Tim", "Anna"] // Initialisierung
console.log(vornamen)
console.log(typeof vornamen)

console.log(vornamen + "Simon")

// Anspechen der Inhaltseinzelwerte 
// mit dem sogenanten Index-Operator
vorname = vornamen[22] + "Simon" // "Jens"
console.log(vorname)

// Veränderung einen hinzufügen oder etwas entfernen
vornamen.push("Kim")
vornamen.push("A")
vornamen.push("B")
console.log(vornamen)
vornamen[22]="ZZZ"
console.log(vornamen)
vornamen.length