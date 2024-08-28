'use strict'
const person = { name: 'Lea' };
console.log(person); // { name: 'Lea' }

Object.freeze(person);
// person.name = 'Tom';
person.age = 27;
console.log(person); // { name: 'Lea' }
