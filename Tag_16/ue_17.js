'use strict';
// ohne Rekursion
const rectangle = (width, height, character) =>
    times(height, () => line(width, character)).join('\n');


// Original mit Rekursion
const rectangle_original = (width, height, character) =>
    height === 0
        ? ''
        : rectangle_original(width, height - 1, character) +
          '\n' +
          line(width, character);


const line = (length, character) => times(length, () => character).join('');

const times = (n, fn) => {
    const results = Array(n).fill(0);
    results.forEach((x, i, r) => (r[i] = fn(i)));
    return results;
};

console.log(rectangle_original(25, 12, '+'));
console.log(rectangle(25, 12, '-'));