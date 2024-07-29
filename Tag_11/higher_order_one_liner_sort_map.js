
let zahlen = [1,4,2,3]
// let sortierFkt =(e,f) => e-f // aufsteigen
let sortierFkt =(e,f) => f-e // absteigen
console.log(     zahlen.sort(  sortierFkt)      )

// abkürzen dieser Schreibform ( one-liner )
console.log(     zahlen.sort(  (e,f) => f-e     )      )



// MAP
let a=[1,2,3,4,5]

// Langform
// let berarbeitungsFunktion = (x) => x + 55
// let erg =a.map(berarbeitungsFunktion); // => [1, 4, 9, 16, 25]

// Kurzform aus Restrukturierung / Refakturierung / refactoring der Langform
let erg =a.map( (x) => x + 55); // => [1, 4, 9, 16, 25]

console.log('✌️erg --->', erg);
console.log('✌️a --->', a);


let listeNamen = ['jens','Anne','tIM','lkdslfj','jJJJ']

//listeNamen[0] //jens ->Jens
console.log(listeNamen[0].charAt(0).toUpperCase())
console.log(listeNamen[0].charAt(0).toUpperCase() + listeNamen[0].toLowerCase().substr(1))
console.log(listeNamen[1].charAt(1).toUpperCase() + listeNamen[1].toLowerCase().substr(1))
console.log(listeNamen[2].charAt(2).toUpperCase() + listeNamen[2].toLowerCase().substr(1))


// one-liner
let neueListe=listeNamen.map((name) => name.charAt(0).toUpperCase() +name.toLowerCase().substr(1))
console.log(neueListe)