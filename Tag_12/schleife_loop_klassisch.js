'use strict';
let letters = 'ABCDEGMO'.split('');

console.log(letters) // Array

console.log(letters.length) // Anzahl der Buchstaben
// for-Schleife / for-loop

// foreach - Funktion an Array
// Wiederholungsstruktur zur Verabeitung - Iteration
for (  let i = 0   ;    i < letters.length    ;    i = i + 1) // i++  // für
{
    console.log("Im Schleifenblock ", i, letters[i])

    //console.log(letters[i]); // Wiederholungs-Statement
}


let string ="ich bin heute glücklich!"

for (let i = 0   ;    i < string.length    ;    i = i + 1){
    console.log(string.charAt(i) ==='i' ? '*' : string.charAt(i))
}

// 'i' 'c' 'h' ....


let namen =['Jens','Tim','Anna']

// 1. foreach-Funktion nut für Arrays
namen.forEach( (element) => {
    let ergebnis = element.length > 3
    if(ergebnis === true)
        console.log("->",element)
})

// 2. for - Schleife für ALLES!
for (  let i = 0   ;    i < namen.length    ;    i = i + 1) { // i++  // für
    let ergebnis = namen[i].length > 3
    if(ergebnis === true)
        console.log("-->",namen[i])
}