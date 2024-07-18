'use strict';


// EVA

// Eingabegroessen z.B. prompt

let menge = prompt("Gib bitte die Benzinmenge in Litern an.")
let strecke = prompt("Gib die gefahrene Strecke in km an.")
let tankgroesse = prompt("Gib die Tankgrösse in Litern an.")

// Verarbeitung der Eingabegroessen

let verbrauch = menge / strecke * 100
verbrauch = Math.round(verbrauch)

let reichweite = tankgroesse * strecke / menge
reichweite= Math.round(reichweite)
// Ausgabe
console.log(`Der Verbrauch beträgt ${verbrauch} l/100km.`)
console.log(`Die maximale Reichweite beträgt ${reichweite} km.`)
