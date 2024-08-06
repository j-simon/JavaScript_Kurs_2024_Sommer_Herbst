'use strict';

const countriesWithCapital = [
  // 0         1
  // Land     Stadt
  ['UK', 'London'],
  ['France', 'Paris'],
  ['Germany', 'Berlin'],
  ['Switzerland', 'Bern'],
  ['Austria', 'Vienna'],
  ['Russia', 'Moscow']
];

const capitalOf = country => {
  console.log('country --->', country);

  let ergebnis = ""
  countriesWithCapital.forEach(array => {
    //console.log(array.indexOf(country))  ///console.log("Inhalt der Zeile:",array))// indexOf(country))
    if (array.indexOf(country) !== -1)
      //console.log( array[1])
      ergebnis = array[1]
  })
  // find
  // forEach
  // includes
  // indexOf
  // countr
  return ergebnis
}

console.log(capitalOf('Switzerland')); // > Bern

const capitalOfAutor = (country) => {
  const capitalIndex = 1;
  const countryIndex = 0;

  return 
  countriesWithCapital.find(
    //['UK', 'London']                                      'UK' ==='Switzerland'
      (countryWithCapital) => countryWithCapital[countryIndex] === country,
  )
  //['Switzerland', 'Bern']
  [capitalIndex]; // 'Bern'
};

const capitalOfAutorRefa = (country) =>    countriesWithCapital.find( (countryWithCapital) => countryWithCapital[0] === country, )[1];

console.log(capitalOfAutorRefa('Switzerland')); // > Bern

const capitalOfAnja = country => {
  for (let i = 0; i < countriesWithCapital.length; i++) {
    if (countriesWithCapital[i][0] === country) {
      return countriesWithCapital[i][1];
    }
  }
}
console.log(capitalOfAnja('Switzerland')); // > Bern

