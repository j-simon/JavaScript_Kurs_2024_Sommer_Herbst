'use strict';

// case - sensitive
let text = "Wind & Regen & Sonne" // + oder 'und'
let searchString = "wind" //"&" //      /&/g
let neuerText = text.replace(searchString,"Sturm")

console.log(text)
console.log(neuerText)

console.log(text.startsWith("Sonne"))