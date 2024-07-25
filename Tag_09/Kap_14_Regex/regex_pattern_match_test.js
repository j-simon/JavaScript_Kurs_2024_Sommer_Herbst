// 'use strict'

// // Kunden - Anmeldung
// // username - min 3 bis max 15 Zeichen aus a-z 0-9 ! = _ -
// // password - mindesten 8 Buchstaben aus der Menge von a-z A-Z aber nicht ? sondern bite eines gross und eine Sonderzeichen

// Prüfung des Usernamenes nach der Regelvorgabe
// let username ="ipsum"

// let regex = /^[a-z0-9!=_-]{3,15}$/

//let ergebnis = username.match(regex) // Array oder null Antwort
let ergebnis = regex.test(username) // Boolean Antwort true oder false
console.log(ergebnis)


const regex = /^(?=.*[a-zA-Z]{8,})(?=.*[A-Z])(?=.*[\W_]).*$/

// Test-Beispiele
const testStrings = [
    "abcde?fghA!",
    "Abcdefgh!",
    "abcABCabc!"
];

testStrings.forEach(str => {
    const isValid = regex.test(str);
    console.log(`"${str}" is ${isValid ? 'valid' : 'invalid'}`);
});
