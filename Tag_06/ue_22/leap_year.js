'use strict';
let year = Number(prompt('Enter a year'));

if (year % 400 === 0) {
  // console.log("1")
  console.log(`${year} is a leap year`);
} else if (year % 100 === 0) {
  // console.log("2")
  console.log(`${year} is NOT a leap year`);
} else if (year % 4 === 0) {
  // console.log("3")
  console.log(`${year} is a leap year`);
} else {
  // console.log("4")
  console.log(`${year} is NOT a leap year`);
}
