'use strict'

let vorname ="Jens"
console.log(vorname.length)

let vornamen = ["Jens" , 12, true, undefined, 44]
console.log(vornamen.length)

console.log(vornamen[0].length) // "Jens" 4 Buchstaben

let neueAnzahlElemente = vornamen.push("Tim", "Anne", 12)
console.log(neueAnzahlElemente)

vornamen[10] = "Tim"
vornamen[9] = "Tom"
vornamen[11] = "Tam"

console.log(vornamen)
console.log(vornamen[8])

vornamen.pop() // push() wird rückgängig gemacht
console.log(vornamen)

// slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

let veraendertesArray = animals.slice(2);
console.log(animals)
console.log(veraendertesArray)

// Expected output: Array ["camel", "duck", "elephant"]
animals.splice(2,3,"5555")
console.log(animals)

const animals2 = ['bison', 'camel',100, 'Ant' ,'another anmial','duck', 'elephant'];
console.log(animals2)
animals2.sort() // Alphabetische Sortierung aufsteigend  A -> Z
console.log(animals2)
// Alphabetische Sortierung absteigend  Z -> A
animals2.reverse()
console.log(animals2)

// 
console.log(animals2.indexOf('bison'))

// Array -> Einzelelement
// join
//

console.log(animals2.join(", "))

// Einzelelemnet -> Array
// split
let text ="elephant;duck;camel;bison;another anmial;Ant;100"
let woerter =text.split(";")
console.log(woerter) 