'use strict'

// let texte =['tree'];

// console.log(texte)

// texte = null

// console.log(texte)

// if (texte === null ) {
//     console.log("match")
// } else {
//     console.log("nicht match")
// }

// let zahl = 12
// zahl = null

console.log(Array.from('+49123321123'.matchAll(/(?<=\+49)[\d]*/g)));