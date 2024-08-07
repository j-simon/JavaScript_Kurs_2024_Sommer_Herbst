'use strict'

const text = 'In cryptology, a code is a method used to encrypt a message that operates at the level of meaning; that is, words or phrases are converted into something else. A code might transform "change" into "CVGDK" or "cocktail lounge". A codebook is needed to encrypt, and decrypt the phrases or words.'

const wordOccurrance = (text) => {
  let ergebnisObjekt = {}

  text = text.toLowerCase()
  console.log(text)
  text = text.replace(/[.,"';]/g, '')
  console.log(text)

  let worte = text.split(" ")
  console.log('worte --->', worte);

  worte.forEach((wort) => {
    if (ergebnisObjekt[wort] === undefined)
      ergebnisObjekt[wort] = 1
    else
      ergebnisObjekt[wort] += 1
  })
  return ergebnisObjekt
}
console.log(wordOccurrance(text));
/*
{ 
    in: 1,
    cryptology: 1,
    a: 5,
    code: 2,
    is: 3,
    …
    decrypt: 1
  }
*/