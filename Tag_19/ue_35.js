'use strict';

//const findKeyByValue = (obj, value)=>{}

function findKeyByValue(obj, value) {
    for (let key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
    return null // Falls kein entsprechender Schlüssel gefunden wird
}

const isMixableWithMyIngredients = (cocktailRecipe) =>
    isMixableWith(cocktailRecipe, ingredientsFromMyBar);

const isMixableWith = (cocktailRecipe, availableIngredients) =>
    cocktailRecipe.every((ingredientFromRecipe) =>
        hasIngredient(availableIngredients, ingredientFromRecipe),
    );

const hasIngredient = (listOfIngredients, searchedIngredient) =>
    listOfIngredients.includes(searchedIngredient)

const ingredientsFromMyBar = [
    'Pineapple',
    'Maracuja Juice',
    'Grapefruit Juice',
    'Crushed Ice',
    'Milch',
    'Vodka',
    'Apple Juice',
    'Aperol',
    'Pineapple Juice',
    'Lime Juice',
    'Lemons',
    'Cucumber',
    'Kaffeelikör',
];


const cocktailRecipesWithNames = {
    'Honolulu Flip': [
        'Maracuja Juice',
        'Pineapple Juice',
        'Lemon Juice',
        'Grapefruit Juice',
        'Crushed Ice',
    ],
    'Casual Friday': [
        'Vodka',
        'Lime Juice',
        'Apple Juice',
        'Cucumber'
    ],
    'Pink Dolly': [
        'Vodka',
        'Orange Juice',
        'Pineapple Juice',
        'Grenadine',
        'Cream',
        'coco syrup',
    ],
    'Black Russian': ['Vodka', 'Kaffeelikör'],
    'White Russian': ['Vodka', 'Kaffeelikör', 'Cream'],
};



const myMixableCocktailsOriginal = (cocktailList) => {

    console.table(cocktailList) // Object

    let cocktailListArray = Object.keys(cocktailList) // Array

    let neuesArray = cocktailListArray.filter((cocktail) => {
        console.log(cocktail)

        //ocktailList['Honolulu Flip']  // 'Maracuja Juice' │ 'Pineapple Juice' │ 'Lemon Juice'     │ 'Grapefruit Juice' │ 'Crushed Ice'
        return isMixableWithMyIngredients(cocktailList[cocktail])
    }
    )
    console.log('neuesArray --->', neuesArray);
    // ich brauche eine rezept aus der liste die ein objekttraegt

    return neuesArray
}


const myMixableCocktails = (cocktailList) => {

    console.table(cocktailList) // Object

    let cocktailListArray = Object.values(cocktailList) // Array

    let neuesArray = cocktailListArray.filter((cocktail,i) => {
        console.log(cocktail)

        //ocktailList['Honolulu Flip']  // 'Maracuja Juice' │ 'Pineapple Juice' │ 'Lemon Juice'     │ 'Grapefruit Juice' │ 'Crushed Ice'
        return isMixableWithMyIngredients(cocktailListArray[i])
    }
    )
    console.log('neuesArray --->', neuesArray);

    console.log(findKeyByValue(cocktailRecipesWithNames,neuesArray[0]))
    console.log(findKeyByValue(cocktailRecipesWithNames,neuesArray[1]))

    neuesArray.forEach( (zutatenliste) => console.log(findKeyByValue(cocktailRecipesWithNames,zutatenliste)))
    // ich brauche eine rezept aus der liste die ein objekttraegt

    return neuesArray
}



console.log(myMixableCocktails(cocktailRecipesWithNames));
// => [ 'Casual Friday', 'Black Russian' ]

