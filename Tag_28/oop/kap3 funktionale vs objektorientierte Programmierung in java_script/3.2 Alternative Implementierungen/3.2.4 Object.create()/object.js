let person = {
    vorname:"Jens"
}
console.log(person)

// let person2 = person
// console.log(person2)
// person2.vorname="Tim"
// console.log(person2)



// console.log(person)

const person2 = Object.create(person)
console.log(person2)
person2.vorname="Tim"
console.log(person2)


console.log(person)