'use strict';

const TAX_PERCENTAGE = 22;

let price = 150;

/* your code here */
// let totalPrice = price + price *  TAX_PERCENTAGE / 100
// let totalPrice = (price * TAX_PERCENTAGE) / 100 + price;

let totalPrice = price * (1 + TAX_PERCENTAGE / 100)

console.log(totalPrice);

const PI = 3.14153489340954893574
console.log(PI)
console.log(Math.PI)