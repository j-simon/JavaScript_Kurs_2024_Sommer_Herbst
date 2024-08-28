const person = { children: [] };
const person2 = { ...person };

console.log(person === person2); // false
console.log(person.children === person2.children); // true