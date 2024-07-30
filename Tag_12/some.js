'use strict'


let zahlen = [1,2,3,4,5,6,7,8,9]
let ergbnis = zahlen.some( (zahl) => zahl > 9)
console.log(zahlen)
console.log(ergbnis)// true  // ja oder nein

// 2. for - Schleife für ALLES!
let endErgebnis=false
for (  let i = 0   ;    i < zahlen.length    ;    i = i + 1) { // i++  // für
    let ergebnis = zahlen[i] > 9 
     endErgebnis = ergebnis || zahlen[i] 
    // if(ergebnis === false)
    //     endErgebnis=false
    // else 
    //     endErgebnis=true
}
// console.log(endErgebnis)

let zahlen2=[2,4,6,8,10]

console.log(zahlen.every( (x)=> x%2 == 0 ))

let texte =['Jens', 'Otto', 'Sebastian']
console.log(texte.find((text)=> text.length === 4))
