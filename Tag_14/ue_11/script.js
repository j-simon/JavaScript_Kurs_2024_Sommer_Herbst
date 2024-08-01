'use strict';

const askForValue = (text) => {
    const num = Number(prompt(text));
    if (isNaN(num) || num < 0) {
        alert("Please enter a positive amount.");
        return askForValue(text);
    }
    return num;
}


let fuelLoad = askForValue('How much fuel did you consume?');
let distance = askForValue('How many km did you travel?');
let tankSize = askForValue('How many liters of gasoline fits in your tank?');

let consumption = () => Math.floor((fuelLoad / distance) * 100);
let fuelRange = () => Math.floor((tankSize * distance) / fuelLoad);

console.log(
    `Your car has a consumption of ${consumption()} liter per 100 kilometers .\nYou can travel ${fuelRange()} km with a full tank.`
)




