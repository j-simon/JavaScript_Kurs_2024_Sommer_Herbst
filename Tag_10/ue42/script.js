'use strict';

const LINE_46 = [
    'Nordostbahnhof', //
    'Theresienkrankenhaus',
    'Teutoburger Str.',
    'Leipziger Str.',
    'Dresdener Str.',
    'Spitalhof',
    'Hubertusstr.', //
    'Tattersall',
    'Martha-Maria-Krkhs.',
];


// 2 Finde die Position der gewünschten Zielhaltestelle Hubertusstr. heraus
let posHub = LINE_46.indexOf("Hubertusstr.")
console.log(posHub) // => 6

// 3 Entferne alle Haltestellen nach Hubertusstr. aus dem Array.
const REST_LINE_46 = LINE_46.slice(0,posHub +1) 
console.log(REST_LINE_46)


//console.log(LINE_46.splice(posHub+1) )
//console.log(LINE_46 )

// 4 Schreibe eine Funktion, die dir nach Übergabe einer beliebigen Zielhaltestelle 
// ein Array mit allen Haltestellen ab Nordostbahnhof bis zur Zielhaltestelle zurückgibt.

// 5

// 1 deklaration
let ermittleHaltestellen = (startHaltestelle,zielHaltestelle) => {
    // let startHaltestelle="Nordostbahnhof"
    let posStartHaltestelle=LINE_46.indexOf(startHaltestelle)

    let posEndHaltestelle=LINE_46.indexOf(zielHaltestelle)

    return  LINE_46.slice(posStartHaltestelle,posEndHaltestelle+1)
}
// 2 call
console.log(ermittleHaltestellen("Teutoburger Str.","Spitalhof"))