'use strict';

// let itemNumber = '123'; // => 0123
// let itemNumber = '7'; // => 07
//  let itemNumber = '07'; // => 07
let itemNumber = '007'; // => 007

let correctedItemNumber // =  itemNumber.startsWith("0")  ?  itemNumber  : "0" +  itemNumber 

if (itemNumber.startsWith("0")) {
    // ja Antwort
    correctedItemNumber = itemNumber
} else {
    // nein Antwort
    correctedItemNumber = "0" + itemNumber
}

console.log(correctedItemNumber);