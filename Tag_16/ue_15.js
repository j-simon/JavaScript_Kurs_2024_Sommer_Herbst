'use strict';

const isSortedJens = (list) => {

    if (list.length <= 1) return true // sortiert
    // alternative kürzere Schreibform return list.length <= 1 // sortiert
    // 'Goldy', 'Heribert', ...
    // slice(1) kopiert in eine neues Array das alte ab dem 1.Element, das 0.Element verschwindet
    if (list[0] < list[1])  return isSorted(list.slice(1))    
      
    return false // unsortiert
    
}

// Musterlösung
const isSorted = (list) => {
    return list.length <= 1 || list[0] < list[1] && isSorted(list.slice(1));
}
const customersOnline_unsortiert = [
    'Friedlinde',
    'Heribert',
    'Tusnelda',
    'Oswine',
    'Ladislaus',
    'Goldy',
];
const customersOnline_sortiert = ['Friedlinde', 'Goldy', 'Heribert', 'Ladislaus', 'Oswine', 'Tusnelda']; // sorted list for testing

const customersOnline_nurEins = ['Friedelinde']

const customersOnline_keins = []

console.log("soll= false", "   ist=", isSorted(customersOnline_unsortiert));
console.log("soll= true ", "   ist=", isSorted(customersOnline_sortiert));
console.log("soll= true ", "   ist=", isSorted(customersOnline_nurEins));
console.log("soll= true ", "   ist=", isSorted(customersOnline_keins));