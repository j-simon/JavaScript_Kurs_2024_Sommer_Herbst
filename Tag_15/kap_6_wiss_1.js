// Erzeuge aus dem String 'abc' den String '3a-2b-1c'
console.log('abc'.split('').map((x, i , a) => `${a.length - i}${x}`).join('-'))
