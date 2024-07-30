'use strict';

let sortByLength = (kategorien) => {

    // kategorien ['Barcelona', 'Basel', 'Belgrade']

    // Langform 
    let callbackFkt = (element1, element2) => { 
        console.log(element1,element2)
        return element2.length - element1.length
    
    }
    kategorien.sort(callbackFkt)


    // Kurzform
    //return 
    // kategorien.sort( (element1, element2) => element2.length - element1.length  )
    return kategorien
}

let city = ['Barcelona', 'Basel', 'Belgrade', 'Berlin', 'Budapest'];

let country = ['Belgium', 'Bulgaria', 'Brazil', 'Bolivia', 'Bosnia and Herzegovina'];
let river = ['Bode', 'Brahmaputra', 'Beuvron', 'Black River', 'Belaja'];

console.log(sortByLength(city));
// console.log(sortByLength(country));
// console.log(sortByLength(river));