'use strict';
//             18  5  8  3   3    6
let numbers = [99, 5, 8, 111, 12, 123];

12, 111, 5 ,123, 8 ,99
/* your code here */

let digitSum = (zahl) => 
    zahl.split('').map((x) => x * 1).reduce((x, y) => x + y)
let digitSum2 = (number) => String(number).split('').map(Number).reduce(add, 0);
let add = (x, y) => x + y;


let byDigitSum = (a,b) => digitSum(String(a)) - digitSum(String(b)) 
let byDigitSum2 = (a,b) => digitSum2(a) - digitSum2(b)

console.log(numbers.sort(byDigitSum)); // => [ 12, 111, 5, 123, 8, 99 ]
console.log(numbers.sort(byDigitSum2)); // => [ 12, 111, 5, 123, 8, 99 ]