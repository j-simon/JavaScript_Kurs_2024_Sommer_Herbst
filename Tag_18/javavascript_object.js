'use strict'
// Attribute Oberbegriffe die Werte 
// vorname Attribut und nachname Attribut 
let name = {
    // key/value pair -> entry
    // key  : value
    vorname : 'Jens',
    nachname : 'Simon'
}

console.log(name)

console.log(name.vorname) // lesen und anzeigen eine Attributs 

name.vorname = "Tim"

console.log(name)
console.log(name.vorname) // lesen und anzeigen eine Attributs 

// dynamische Erweiterung von Attribut
name.alter=42
console.log(name)

name.alter=41
console.log(name.alter)

// NACHTEIL des Objectes
// keine Higher-Order Funktions, diese gibt es nicht
//name.forEach(attr => console.log(attr))

// Lösung
let nameArray = Object.values(name)
console.log(name)
console.log(nameArray)
nameArray.forEach(attr => console.log(attr))

let arrayName = ['Jens','Simon',41]
// arrayName.forEach(attr => console.log(attr))

let nameArrayKeys = Object.keys(name)
console.log('nameArrayKeys --->', nameArrayKeys);


let nameArrayAlles = Object.entries(name)
console.log('nameArrayAlles --->', nameArrayAlles);
/*
 [
     [ 'vorname', 'Tim' ],
     [ 'nachname', 'Simon' ],
     [ 'alter', 41 ]
 ]
*/
console.log("\n\n\n")
// JS
console.log(name)
let jsonName = JSON.stringify(name)
// console.log(typeof jsonName)
// console.log( jsonName)



let nameZurueck =JSON.parse(jsonName)
console.log(nameZurueck)

// Php
//json_decode()
//json_encode

// 


console.log(arrayName.vorname)

console.log(nameZurueck)
console.log(nameZurueck[0])
// Optimale Zusatzkpnzept
console.log(nameZurueck.vorname)
console.log(nameZurueck['vorname'])