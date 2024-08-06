'use strict'

const countriesWithCapital = [
    ['UK', 'London'],
    ['France', 'Paris'],
    ['Germany', 'Berlin'],
    ['Switzerland', 'Bern'],
    ['Austria', 'Vienna'],
    ['Russia', 'Moscow']
  ];


const countryForCapital =   capital => {
    for (let i = 0; i < countriesWithCapital.length; i++) {
      if (countriesWithCapital[i][1] === capital) {
        return countriesWithCapital[i][0];
      }
    }
  }

console.log(countryForCapital('Bern')); // Switzerland

// siehe Lösungen Aufgabe 28 , es werden nur die Indizes getauscht
// und natürlich der Parameter country and capital
