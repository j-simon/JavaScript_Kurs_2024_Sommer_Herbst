'use strict';
let weightYesterday = Number(prompt('What was your weight yesterday?'));
let weightToday = Number(prompt('And what´s your weight today?'));



let weightChangeInPercent =
  (weightToday - weightYesterday) / weightYesterday * 100
;

if (weightYesterday < weightToday) {
  console.log(
    `I can´t believe it! You are ${weightChangeInPercent} percent heavier than yesterday!\nYou have to run ten times around your house!`
  );
} else if (weightYesterday > weightToday) {
  console.log(
    `Congrats! I am so proud of you. Your weight is ${(-1)*weightChangeInPercent} percent less than yesterday!!!\nDo you wanna have a cookie? (There is an delicious recipe in this book...)`
  );
}

if (weightYesterday === weightToday) {
  console.log(
    'Your weight is still the same. Nothing changed. Now, take a deep breath, look inside yourself, think about your goals and now: JUMP OUT OF YOUR CHAIR AND START A WORKOUT'
  );
}
