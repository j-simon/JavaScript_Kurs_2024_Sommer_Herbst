'use srict';

// wenn ?
// if (7 < 6) // ausdruck mit vergleichsoperator
// {
//     // Antwort ja , dann
//     console.log("ja: 7 < 6")
// }
// else  // ansonsten
// {
//     // Antwort nein
//     console.log("nein: 7 < 6")
// } // wenn ?


let alter = Number(prompt("Wie alt bist Du?"))

if (alter < 18) { // ausdruck mit vergleichsoperator

    // Antwort true ja , dann
    console.log("Du bist noch nicht volljährig.") // zu ENDE
} else { // ansonsten

    // Antwort false  nein
    console.log("Du bist volljährig.")
}

console.log("Ende")



const SOLUTION = 42;

let answer = Number(prompt("What's the result of 6 * 7"));

if (answer === SOLUTION) {
    console.log('42 is correct.');
    console.log('Congratulations, You are a genius!');
} else 
    console.log("Wrong. Math isn't exactly your strong point, is it?");


// Kurzform für spezieles wenn dann sonst
let meldung
if (isNaN(answer))
// true
    meldung = "Du hast keine gültige Zahl eingegeben (z.B. Buchstaben)"
else   
// false 
    meldung = "Du hast eine Zahl gegeben"
   
// Operator ?: 3 Operaden - Operatoren Ternärer Operator   
let meldung2 = isNaN(answer) ? "Du hast keine gültige Zahl eingegeben (z.B. Buchstaben)" : "Du hast eine Zahl gegeben"


console.log(meldung)
console.log(meldung2)
