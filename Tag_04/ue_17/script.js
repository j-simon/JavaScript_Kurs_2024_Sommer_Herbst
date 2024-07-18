'use strict'

//               0  0.99999
//               =*49 0   0.99999*49 48.9999999
//               floor 0             48
//                +1   1             49  
let zufallszahl
// let zufallszahl= Math.floor((0.9999999999999 * 49)) + 1                   
let i

for(i=0; i< 10; i++){
    zufallszahl= Math.floor((Math.random() * 49)) +1   
    console.log(`Die Zufallszahl ist: ${zufallszahl}`)
}