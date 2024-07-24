'use strict'

// 1. Deklaration einer Funktion
let logTransformedName = (firstName, lastName) => {
        
    console.log(`${lastName}, ${firstName.charAt(0)}.`);
}



// 2. Aufruf der Funktion
logTransformedName('Ladislaus', 'Jones') // => 'Jones, L.'

// ? gib mir noch mal bitte schnell dieses 'Jones, L.' und verändere entwas

logTransformedName('Jens', 'Simon') // => 'Jones, L.'