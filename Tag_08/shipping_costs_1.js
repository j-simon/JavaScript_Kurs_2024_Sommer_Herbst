'use strict'
'use strict'

// Langform
// let ermittleVolumen = (laeenge, durchmesser) => {
//     let volumen = ((((Math.PI * durchmesser) / 2) * durchmesser) / 2) * laenge
//     return volumen
// }

// Kurzform
let ermittleVolumen = (laenge, durchmesser) => ((((Math.PI * durchmesser) / 2) * durchmesser) / 2) * laenge



// universal Variante für die Versandkosten
// E
let ermittleVersandkosten = (laenge, durchmesser) => {
    // E
    // laeenge, durchmesser
    // Wächterprinzip /Guard
    if (laenge < 0) return NaN

    if (durchmesser < 0) return NaN

    const KOSTEN_PRO_EINHEIT = 0.7
    const KOSTEN_PRO_KUBIKZENTIMETER = 0.001

    // V
    let volumen = ermittleVolumen(laenge, durchmesser)
    let versandKosten = volumen * KOSTEN_PRO_KUBIKZENTIMETER + KOSTEN_PRO_EINHEIT

    // A optisch
    //console.log(versandKosten + " Euro") // => 6.983185307179587
    // A datentechnsich
    return versandKosten
}

//console.log(ermittleVersandkosten(-80,10))

let kosten = ermittleVersandkosten(-80, 10)
if (!isNaN(kosten))
    console.log("OK")
else
    console.log("falsch")


kosten = (ermittleVersandkosten(50, 20))
if (!isNaN(kosten))
    console.log("OK")
else
    console.log("falsch")

console.log(ermittleVersandkosten(40, 15))
console.log(ermittleVersandkosten(30, 10))
console.log(ermittleVersandkosten(70, 30))
