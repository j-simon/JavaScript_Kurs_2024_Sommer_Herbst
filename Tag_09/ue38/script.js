'use strict';


// EVA

// Eingabegroessen z.B. prompt

let gibMengeEin = () => prompt("Gib bitte die Benzinmenge in Litern an.")


let gibStreckeEin = () => prompt("Gib die gefahrene Strecke in km an.")

let gibTankgroesseEin = () => prompt("Gib die Tankgrösse in Litern an.")

let menge = 50 //gibMengeEin()
let strecke = 1000 //gibStreckeEin()
let tankgroesse = 60 //gibTankgroesseEin()

// Verarbeitung der Eingabegroessen

let verbrauch = (menge, strecke) => Math.round(menge / strecke * 100)


let reichweite =(tankgroesse,strecke,menge) => Math.round(tankgroesse * strecke / menge)
// Ausgabe
console.log(`Der Verbrauch beträgt ${verbrauch(menge, strecke)} l/100km.`)

console.log(`Die maximale Reichweite beträgt ${reichweite(tankgroesse,strecke,menge)} km.`)
