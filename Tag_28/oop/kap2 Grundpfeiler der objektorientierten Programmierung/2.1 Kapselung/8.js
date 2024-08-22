// functional
let age = 32; // globale Variable aus Sicht der Funktion
function increaseAge() { 
  age++; // local scope der Funktion
  console.log(age)
}

// Hauptprogramm
//age++
increaseAge()




// object oriented
// global
const person = {
  age: 32,  // local scope
  increaseAge: function () {
    this.age++; // local local scope
    console.log(age)
  },
};

const person2 = {
  age: 32,  // local scope
  increaseAge: function () {
    this.age++; // local local scope
    console.log(age)
  },
};




person.increaseAge()
person2.increaseAge()
// oder auch mit Arrow-Function ??

// .. mal ausprobieren







// Nachteil, wenn ich mehrere personen veralten will,
// muss ich wieder alles duplizieren! oder funktioniert das eventuell gar nich?
// const person2 = {
//   age: 42,
//   increaseAge: function () {
//     this.age++;
//   },
// };

// person.increaseAge()
// console.log(person)

// person2.increaseAge()
// console.log(person2)

// // zur Sicherheit nochmal kontrollieren!
// console.log(person)
// kopieren ist ok, aber copy ist nicht erwünscht (DON'T REPEAT YOURSELF)