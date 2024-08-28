
const A = 10
// A=20

const O = { vorname: "Jens" }
// O = { test: "test" }
Object.freeze(O)
O.vorname="Tim"
console.log(O)

O.nachnme="Simon"
console.log(O)

// mutable

// immutable
