'use strict';

/*let logTransformedName = (firstName, lastName) =>
    console.log(`${lastName}, ${firstName.charAt(0)}.`);
logTransformedName('Ladislaus', 'Jones');
logTransformedName('Jens', 'Simon');
logTransformedName('Simon', 'Jens');
*/

// 1. Funktion Deklaration
let logTransformedName = ({firstName, lastName}) => {

    console.log(firstName)
    console.log(`${lastName}, ${firstName.charAt(0)}.`);
}
// 2. Aufruf Werte: Object key:value,...
logTransformedName({firstName:'Ladislaus', lastName:'Jones'});
logTransformedName({firstName:'Jens', lastName:'Simon'});
logTransformedName({lastName:'Simon', firstName:'Jens'});
logTransformedName({vorname:'Simon', nachname:'Jens'});