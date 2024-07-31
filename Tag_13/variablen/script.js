'use strict'

// global scope

// Geltungsbereiche - scopes {}
let vorname="Jens"
console.log('vorname --->', vorname);

if(vorname==="Jens") {
    // local scope
    let vorname ="Tim"
    console.log('vorname --->', vorname);
    console.log("ja")
}    
console.log('vorname --->', vorname);

let fkt = () => {
    // local scope Funktion bedeutunsgleich
    let vorname
    x=30
}
let x=10
fkt(x)
console.log(x)