// 'use strict'

// 1 Deklaration wird fremdgegeben
const times1 = (n, fn) => {
    let results = [];
    Array(n) // [undefined,undefined]
        .fill(0) // [0, 0]
        .forEach(a => results.push(fn()))
    return results;
}

const times = (n, fn) => {
    const results = Array(n).fill(0); [0, 0 ,0]
    results.forEach((x, index, array) => (array[index] = fn(index)));
    return results;
};

// 2 Aufruf
let ergebnis = times(10,((i) => i * i  ))// i  0,1,2,3,4,5,6,7,8,9
console.log(ergebnis)
console.log(ergebnis.join(''))

// 0,1,2,3,4
// 3,4,5,6

ergebnis = times(4,((i) =>  String.fromCharCode(i + 65)  ))// i  0,1,2,3,4,5,6,7,8,9
console.log(ergebnis)
console.log(ergebnis.join(''))
// let arr = Array(5);
// console.log(arr); // Output: [ undefined,undefined,undefined,undefined ]
// console.log(arr[0]); // Output: [ <5 empty slots> ]
// console.log(arr.length); // Output: 5

//let vorname = [undefined  ,'', '', '', '']