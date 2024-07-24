'use strict';

// Teilproblemlösung mit Debug Ausgaben
// let fightThree="Hal"
// console.log(fightThree.length)
// if (fightThree.length >=8 && fightThree.length <= 15) {
//     console.log("true")
    
// } else {
//     console.log("false")
// }



let username = prompt('Welcome. Please tell me your name');
alert(`Hey ${username}. Nice to meet you.`);

let playerFitness = prompt(`So ${username}. Let me know: Are you ready to fight?\nPlease answer with yes or no`);

if (playerFitness === 'yes') {
    let fightOne = prompt(`Great! Let's start to play! I'm sure you'll make it.\nWhich Operators has the higher priority: * or + ?`);

    if (fightOne === '*') {
        alert(`Yeah, you got it. ${fightOne} is right! The dark side has no chance at this point.`);

        // ab hier beginnt die Übung

        let fightTwo = prompt(`Yeah, you got it. ${fightOne} is right! The dark side has no chance at this point.\nWhat\'s the German word for if?` 
                     ).toLowerCase()
        

        if (fightTwo === 'wenn'|| fightTwo === 'falls') {
            alert("That's a small step for a programmer, but a giant leap in this fight!");
            let fightThree = prompt(
                "That's a small step for a programmer, but a giant leap in this fight!\nNow, please enter string with a length between 8 and 15 characters…"
            );
            if (fightThree.length >= 8 && fightThree.length <= 15) {
                alert("You've rocked. For this time the bad JavaScript is defeated!");
                
            } else {
                alert("That's tragic. Just a step before winning...");
            }
        } else {
            alert('There is no time for a break. Try again!');
        }
        // hier ist die Übung 23 zu Ende

    } else {
        alert('Damn! Please don´t give up and try again.');
    }

} else {
    alert(`${username}, I´m very disappointed about you. The force of dark side of JavaScript grows up.`);
}
