'use strict';
var eingabe = Number(prompt("Gib Zahl ein"));
if (eingabe < 18) {
    console.log("kleiner 18");
}
else {
    console.log("groesser>= 18");
}
var wert = Math.pow(eingabe, 2);
