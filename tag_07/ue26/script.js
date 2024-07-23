'use strict';
let name = 'Ladislaus Coolio    Jones';
let spacePosition = name.lastIndexOf(' ');
let firstName = name.substring(0, spacePosition).trim();
let lastName = name.substring(spacePosition + 1);

console.log(`>${firstName}<`);
console.log(`>${lastName}<`);
