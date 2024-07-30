'use strict';

const transformName = (firstNames, lastName) => {

    let callbackFkt = (firstName) => {
        //console.log(firstName, typeof firstName, firstName.charAt(0))
        return `${firstName.charAt(0)}.`
    }

    let neueFirstNames = firstNames.map(callbackFkt)
    // console.log(firstNames)
    // console.log(neueFirstNames)

    return neueFirstNames.join(' ') + " " + lastName// => 'L. C. B. Jones'
    //return `${lastName}, ${firstName.charAt(0)}.`
}

const transformNameRefactored = (firstNames, lastName) => firstNames.map((firstName) => `${firstName.charAt(0)}.`).join(' ') + " " + lastName

console.log(transformNameRefactored(['Ladislaus', 'Coolio', 'Barry'], 'Jones'))
// => 'L. C. B. Jones'
