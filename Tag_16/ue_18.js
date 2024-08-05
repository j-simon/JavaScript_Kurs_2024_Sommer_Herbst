'use strict';

const articleNumber = "12345"

// 1. padStart - String Funktion
console.log(articleNumber.padStart(7,"0"))

// 2. array unshift
let arr=articleNumber.split("")
console.log('arr --->', arr);
for (let i= arr.length ; i < 7 ; i++) {
    arr.unshift("0")
}
console.log('arr --->', arr);
console.log(arr.join(""))


// 3. forEach
arr =articleNumber.split("")

// Definiere eine temporäre Array mit der Anzahl der fehlenden Elemente
let tempArr = new Array(7 - arr.length).fill(0);
console.log('tempArr --->', tempArr);


// Füge die "0" Elemente dem Array hinzu
tempArr.forEach(() => arr.unshift("0"));
console.log('tempArr --->', tempArr);

console.log(arr.join(""));


// Musterlösung
const ARTICLE_NUMBER_LENGTH = 7;

const fillUp = (itemNumber) =>
    ARTICLE_NUMBER_LENGTH === String(itemNumber).length
        ? String(itemNumber)
        : fillUp(`0${itemNumber}`);

console.log(fillUp(477));