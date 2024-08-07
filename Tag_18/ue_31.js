'use strict';



const isMixableWith = (cocktailRecipe, availableIngredients) =>
  cocktailRecipe.every((ingredientFromRecipe) => hasIngredient(availableIngredients, ingredientFromRecipe));

const hasIngredient = (listOfIngredients, searchedIngredient) =>
  listOfIngredients.includes(searchedIngredient);

const honoluluFlip = [
  'Maracuja Juice',
  'Pineapple Juice',
  'Lemon Juice',
  'Grapefruit Juice',
  'Crushed Ice'
];

const casualFriday = ['Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber'];
const pinkDolly = [
  'Vodka',
  'Orange Juice',
  'Pineapple Juice',
  'Grenadine',
  'Cream',
  'Coco Syrup'
];
const cocktailRecipes = [honoluluFlip, casualFriday, pinkDolly];

const ingredientsFromMyBar = [
  'Pineapple',
  'Maracuja Juice',
  'Cream',
  'Grapefruit Juice',
  'Crushed Ice',
  'Milk',
  'Vodka',
  'Apple Juice',
  'Aperol',
  'Pineapple Juice',
  'Lime Juice',
  'Lemons',
  'Cucumber'
];

const isMixableWithMyIngredientsOriginal = (cocktailRecipe) => {
  console.log('cocktailRecipe --->', cocktailRecipe);
  return isMixableWith(cocktailRecipe,ingredientsFromMyBar) 
}/* ??? */

const isMixableWithMyIngredients = (cocktailRecipe) =>   isMixableWith(cocktailRecipe,ingredientsFromMyBar) 


console.log(cocktailRecipes.filter( isMixableWithMyIngredients));


// => [ 'Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber' ]

// find : [ 'Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber' ]
// filter : [ [ 'Vodka', 'Lime Juice', 'Apple Juice', 'Cucumber' ] ]