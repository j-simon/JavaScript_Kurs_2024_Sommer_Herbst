'use strict';


let hasIngredient = (honoluluFlip, searchedIngredient) => {
    console.log(honoluluFlip)
    console.log(searchedIngredient)

    return honoluluFlip.includes(searchedIngredient)  
    //return true/false;
}

let honoluluFlip = [
  'Maracuja Juice',
  'Pineapple Juice',
  'Lemon Juice',
  'Grapefruit Juice',
  'Crushed Ice'
];

console.log(hasIngredient(honoluluFlip, 'Maracuja Juice')); // => true