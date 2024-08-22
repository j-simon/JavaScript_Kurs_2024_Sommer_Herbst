'use strict'; // strikt-modus an

function whatIsThis() {
    return this;
};

// Node.js
// console.log(whatIsThis()); // undefined

// Browser
console.log(whatIsThis()); // undefined