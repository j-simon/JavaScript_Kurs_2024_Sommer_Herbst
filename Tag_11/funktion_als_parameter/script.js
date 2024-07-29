// 1 Deklaration
let fkt = (z, t, f) => {
    // E
    
    // Verarbeitung
    
    // A
    console.log(z)
    console.log(t)
    // 2. Aufruf
    f()
}

// 2 Aufruf
// gilt alle Datentyp
let zahl = 10
let text ="Hallo"
let funktion = () => {}

// console.log(typeof zahl) // => number
// console.log(typeof text) // => string
fkt(zahl,text,funktion)

// High-Order-Functions

let plus = (a,b) =>  a + b
//let erg = berechne(33,44)
//console.log(erg)
let minus= (a,b) =>  a - b

// callback-funktion
let taschenrechner =  (berechnungsvorschrift, x, y ) => 
    berechnungsvorschrift(x,y)

// 1. Rechenvorgang + rechnen
console.log(taschenrechner(plus,12,45)) // => 57

// 2. Rechenvorgang + rechnen
console.log(taschenrechner(minus,45,12)) // => 33

// Taschenrechner ist High-Order_Funktion
