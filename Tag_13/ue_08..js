/*
Übung 8: Komm mir doch mal quer

Schreibe eine Funktion digitSum, die die Quersumme einer übergebenen Zahl zurückgibt. Hinweis: Die Quersumme ist die Summe aller Ziffern einer Zahl.
Tipp: Verwende split('').

5435 => 5 + 4 +3 +5 = 17

*/

// 1 Deklaration
let digitSumLangVersion = (zahl) => {
  console.log(zahl)
  let zahlenArray =zahl.split('')
  console.log(zahlenArray)
  let erg = zahlenArray.map((x) => x * 1).reduce((x, y) => x + y)
  console.log(erg)
  return erg
}

let digitSum = (zahl) => 
   zahl.split('').map((x) => x * 1).reduce((x, y) => x + y)


let digitSum2 = (number) => String(number).split('').map(Number).reduce(add, 0);

Number = (x) => {x *1}

let add = (x, y) => x + y;

console.log(digitSum(4242)); // => 12


// 2 Aufruf
console.log(digitSum(String(5435))) // => 17
