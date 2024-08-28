const person = { name: 'Lea' };
Object.freeze(person);
console.log(person); // { name: 'Lea' }

const person2 = Object.freeze({ ...person, age: 27 });
console.log(person2); // { name: 'Lea', age: 27 }

const person3 = Object.freeze({ ...person2, name: 'Tom' });
console.log(person3); // { name: 'Tom', age: 27 }