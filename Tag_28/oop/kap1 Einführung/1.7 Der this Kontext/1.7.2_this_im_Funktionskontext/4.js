// kein strict-modus !

function whatIsThis() {
     console.log("this=",this)
    return this;
};

// Node.js
// console.log(whatIsThis() === global); // true

//Browser
console.log("this=",this)
// this=1  nicht aenderbar !
// console.log(whatIsThis() === window); // true
