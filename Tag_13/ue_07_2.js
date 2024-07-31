let isMixableWithLangVersion = (cocktailRecipe, availableIngredients) => {
    console.log('availableIngredients --->', availableIngredients);
    console.log('cocktailRecipe --->', cocktailRecipe);

    //availableIngredients.every()
    return cocktailRecipe.every((ingredient) => {
        console.log('ingredient --->', ingredient);
        return hasIngredient(availableIngredients, ingredient)

    })


}
let isMixableWith = (cocktailRecipe, availableIngredients) =>  
    cocktailRecipe.every((ingredient) =>  
        hasIngredient(availableIngredients, ingredient) )

let isMixableWith2 = (cocktailRecipe, availableIngredients) =>  
    availableIngredients.every((ingredient) =>  
        hasIngredient(cocktailRecipe, ingredient) )

let hasIngredient = (x, searchedIngredient) =>
    x.includes(searchedIngredient);

let honoluluFlip = [
    'Maracuja Juice',
    'Pineapple Juice',
    'Lemon Juice',
    'Grapefruit Juice',
    'Crushed Ice'
];

let ingredientsFromMyBar = [
    'Pineapple',
      'Maracuja Juice',
    'Cream',
    'Lemon Juice',
    'Grapefruit Juice',
    'Crushed Ice',
    'Milk',
    'Apple Juice',
    'Aperol',
    'Pineapple Juice',
    'Limes',
    'Lemons'
];

//honoluluFlip isMixableWith ingredientsFromMyBar?
console.log(isMixableWith(honoluluFlip, ingredientsFromMyBar)); // => true