'use strict';



let boardgames = [ // Brettspiele-Liste
    'Caverna',
    'Puerto Rico',
    'Agricola',
    'Black Friday',
    'Funny Friends',
    'Fauna',
    'Eclipse', // Brettspiel
    'Codenames',
    'Dominion',
    'Fairy Tale',
    'Fast Flowing Forest Fellers',
    'Fearsome Floors'
];

//let startsWithLetterF = /* ??? */;

let startsWithLetterF =  (spiel) => spiel.startsWith('F') 
let boardgamesStartingWithF = boardgames.filter( startsWithLetterF   )
console.log(boardgamesStartingWithF); // => [ 'Funny Friends', 'Fauna', 'Fairy Tale', 'Fast Flowing Forest Fellers', 'Fearsome Floors']

// Variante 2
// console.log(boardgames.filter((spiel) => spiel.startsWith('F')))

// Variante 3
// console.log(
//     boardgames.filter(

//         (spiel) => {
//             return  spiel.startsWith('F')
//         }

//     )

// )