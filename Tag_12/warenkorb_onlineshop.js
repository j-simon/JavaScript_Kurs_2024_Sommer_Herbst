'use strict';

let warenkorbPreise = [25.95, 45.95, 33.88]

// alle Elemente des Array auf einen Wert reduziert
let callbackFkt = (erstes, zweites) => { // 6.9 + 25.95
    console.log(erstes)                                   
    console.log(zweites)
    console.log()
    return erstes + zweites
}

console.log(warenkorbPreise.reduce(callbackFkt, -6.9  ))

// 
let texte =['abc' ,'def' ,'ghi'] // 'adg'
console.log(texte.reduce ( (erstes,zweites) =>  erstes.charAt(0) + zweites.charAt(0), '>'  ))
// >g
// > abc -> >a
// >a def
// >d
// >d ghi
// >g