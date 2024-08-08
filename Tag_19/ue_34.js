'use strict';

const countriesWithCapital = {
  UK: 'London',
  France: 'Paris',
  Germany: 'Berlin',
  Switzerland: 'Bern',
  Austria: 'Vienna',
  Russia: 'Moscow'
};

const countryForCapitalOriginal = (capital) => {
   console.log('capital --->', capital);
  // console.log(countriesWithCapital)
  let array = Object.entries(countriesWithCapital)
  console.log(array)

  let ergebnis = array.find((zeile) => zeile[1] === capital)
  console.log('ergebnis --->', ergebnis);
 
  return ergebnis[0]//"?? Germany"
} 

const countryForCapital = (capital) => 
   Object.entries(countriesWithCapital).find((pair) => pair[1] === capital)[0]
 
const countryForCapitalAutor = (capital) =>
  Object.keys(countriesWithCapital).find(
    //              "Berlin"      "Berlin" countriesWithCapital['Germany']
      (country) => capital === countriesWithCapital[country],
  );

 
 

console.log(countryForCapital('Berlin'));
console.log(countryForCapital('Vienna'));

console.log(countryForCapitalAutor('Berlin'));
console.log(countryForCapitalAutor('Vienna'));