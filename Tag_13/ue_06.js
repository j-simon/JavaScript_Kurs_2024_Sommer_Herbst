'use strict';

let result;
let results;
let inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let text = 'Hi this is a short text';
let names = ['Heribert', 'Friedlinde', 'Tusnelda', 'Oswine', 'Ladislaus'];

// //odd numbers
// results = inputs.filter((n) => n % 2 === 1)
// console.log(results) // => [ 1, 3, 5, 7, 9 ]

//sum
// let startwert = 0
// result = inputs.reduce((vorheriger, aktueller) => vorheriger + aktueller, startwert)/* ??? */
// console.log(result); // => 0 + 55  = 65

// //product
// result = inputs.reduce((vorheriger, aktueller) => vorheriger * aktueller)
// console.log(result); // => 3628800

//longest word length

// result = text.split(" ").reduce( (a, b) => b.length > a ? b.length : a , 0 )
// result = text
//     .split(" ")
//     .map((wort) => wort.length)
//     .reduce((a, b) => Math.max(a, b))

// console.log(result);

// //longest word
// result = text.split(" ").reduce((a,b) => a.length > b.length ? a : b )
// console.log(result); // => short

// //avg word length
//result = text./* ??? */
// result = text.split(" ").reduce( (a, b, currentIndex, arr ) =>
//     currentIndex !== arr.length-1 ? (a + b.length) :  (a + b.length)/arr.length , 0)
// console.log(result);
// // result = text.split(' ').reduce((a, b) => a + b).length / text.split(' ').length;

// console.log(result); // => 3

//sort by 3rd letter
// results = names.sort( (a, b) =>  a.charAt(2) > b.charAt(2) ? 1 : -1
// );
// console.log(results); // => [ 'Ladislaus', 'Friedlinde', 'Heribert', 'Tusnelda', 'Oswine' ]

// Are there names with more than 8 letters?
// result = names.some((name)=> name.length > 8);
// console.log(result); // => true

// Has every name at least 8 letters?
// result = names.every((name)=> name.length >= 8);
// console.log(result); // => false

// // What is the lowest value from the inputs?
// 1 2 => 1
// 1 3 => 1
// 1 4 => 1
// 9 8 => 8
// 8 7 => 7
// result = inputs.reduce((a,b) => Math.min(a,b) )/* ??? */
// console.log(result); // => 1