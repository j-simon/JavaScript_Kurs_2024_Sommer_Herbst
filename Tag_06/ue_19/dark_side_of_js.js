'use strict';

let username = prompt('Welcome. Please tell me your name.');
alert(`Hey ${username}. Nice to meet you.`);

let playerFitness = prompt(
  `So ${username}. Let me know: Are you ready to fight?\nPlease answer with yes or no`
);

if (playerFitness === 'yes') {
  let fightOne = prompt(
    'Great! Let`s start to play! I´m sure you´ll make it.\nWhich Operators has the higher priority: * or + ?'
  );
  if (fightOne === '*') {
    alert(
      `Yeah, you got it. ${fightOne} is right! The dark side has no chance at this point.`
    );
  }
  if (fightOne !== '*') {
    alert('Damn! Please don´t give up and try again.');
  }
}

if (playerFitness !== 'yes') {
  alert(
    `${username}, I´m very disappointed about you. The force of dark side of JavaScript grows up.`
  );
}
