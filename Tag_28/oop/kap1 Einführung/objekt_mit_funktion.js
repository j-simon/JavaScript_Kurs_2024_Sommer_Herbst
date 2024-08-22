// 'use strict'
let objektJens = {
    alter:42,
    nennenMirDeinAlter: function () {return "hallo du bist " + this.alter+ " Jahre alt"}
}

// Konzeptionierung(Programmierer JS)
// ================================================================

// Nutzungsseite (Progammierer JS)
console.log(objektJens.nennenMirDeinAlter())

// console.log()

// this-Kontext(Referenz)
// this ist die Selbstreferenz