'use strict';

let name = prompt("What's your name?");
let firstName = prompt("What's your first name?");
let gender = prompt('Are you a lord (m) or lady (f)?');
let age = Number(prompt('How old are you?'));


if (!(name.length >=2 && name.length <=100)) {
    console.log("Fehler! Namensprüfung")
 } 

if (name.length < 2 || name.length > 100) {
   console.log("Fehler! Namensprüfung")
}

if (firstName.length < 2 || firstName.length > 100) {
    console.log("Fehler! Vornahmenprüfung")
}

if (!(gender === 'f' || gender === 'm')) {
    console.log("Fehler! Geschlechtprüfung")
}


if (gender !== 'f' && gender !== 'm') {
    console.log("Fehler! Geschlechtprüfung")
}

if (isNaN(age) || age >= 150) {
    console.log("Fehler! Altersprüfung")
}
