// MAP
let a=[1,2,3,4,5]

// abbildungslogik, neuzuweisung
let erg =a.map( (x) => x + 55); // => 56, 57, 58, 59, 60]
console.log(erg)
console.log(a)

// FILTER
erg = a.filter( (zahl) => zahl >= 4 ) // true für eine neue Menge von Element
console.log(erg)
console.log(a)

// true / false
let texte = ['abc','aad','jens','zz']
erg = texte.filter( (text) => text.substr(0,2) >'aa' ) // true für eine neue Menge von Element
console.log(erg)
console.log(texte)

// forEach
// iterator - schleife
let hilfsarray=[]
// callback - anonyme Funktion
a.forEach( (elem) => hilfsarray.push(  elem + 55)  )

// callback - benannten Funktion (name ist teueEtwas())
let tueEtwas=(elem) => hilfsarray.push(  elem + 55)
a.forEach( tueEtwas )

console.log(a)
console.log(hilfsarray)