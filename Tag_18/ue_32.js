'use strict';

const countriesWithCapital = {
  0 : 1,
  "U S A" : "Washington",
  vorname: "Jens",
  UK: 'London',
  France: 'Paris',
  Germany: 'Berlin',
  Switzerland: 'Bern',
  Austria: 'Vienna',
  Russia: 'Moscow'
};

const capitalOfOriginal = (country) => {
  console.log('country --->', country);
  console.table(countriesWithCapital)
  let array = Object.entries(countriesWithCapital)
  console.log(array)
  let ergebnis = array.find((zeile)=>zeile[0] === country)
  
  console.log('ergebnis --->', ergebnis);

  return ergebnis[1]
  // return "??"
} /* ??? */

const capitalOfJens = (country) => 
     Object.entries(countriesWithCapital).find((zeile)=>zeile[0] === country)[1]
  
const capitalOf = (country) => countriesWithCapital[country];

console.log(capitalOf('U S A')); // Bern
