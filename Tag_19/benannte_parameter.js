'use strict';

const foo = ({ a = 1, b = 2 }) => `a: ${a}, b: ${b}`;

console.log(foo({ a: 7 })); // => a: 7, b: 2
console.log(foo({ b: 7 })); // => a: 1, b: 7
console.log(foo({ a: 7, b: 8 })); // => a: 7, b: 8
console.log(foo({ b: 8,a: 7 })); // => a: 7, b: 8
console.log(foo({ })); // => a: 7, b: 8
