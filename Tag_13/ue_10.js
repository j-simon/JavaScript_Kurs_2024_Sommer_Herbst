
/* more code here */

let boardgames = [
  'Caverna',
  'Puerto Rico',
  'Agricola',
  'Black Friday',
  'Funny Friends',
  'Fauna',
  'Eclipse',
  'Codenames',
  'Dominion',
  'Fairy Tale',
  'Fast Flowing Forest Fellers',
  'Fearsome Floors'
];
let isFerdinandsBoardgameLangForm = (spielname) => {
// StartsWith - F
// Spielname besteht aus 2 Wörtern
 return spielname.startsWith("F") && spielname.split(' ').length > 1 && spielname.split(' ').every(x=> x.startsWith("F"))

} 

let isFerdinandsBoardgame = (spielname) => 
       pruefeAufMehrfachWort(spielname) && spielname.split(' ').every(x=> x.startsWith("F"))
    
let pruefeAufMehrfachWort = (spielname) => spielname.split(' ').length > 1    

console.log( boardgames.filter(isFerdinandsBoardgameLangForm)); // => [ 'Funny Friends', 'Fast Flowing Forest Fellers', 'Fearsome Floors' ]
