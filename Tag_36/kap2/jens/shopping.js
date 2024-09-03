// const alles = require("fs-json")
// console.log(alles)

// console.log(alles.readShoppingListOf(123))

 const {readShoppingListOf} = require("./fs-json@1.0.0/fileSystem.js")
 console.log(readShoppingListOf(727299))

 // console.log(readShoppingListOf(123))
// // console.log(readShoppingListOf(345))
// // saveShoppingListFor(123, '')
// removeShoppingListEntryFor(123 )

// console.log(readShoppingListOf(123))

// updateShopingListFor(123,'Cola')

// console.log(readShoppingListOf(123))
//saveDataObject({ JavaScript: 'is fun!' });
//console.log(loadDataObject()); // { JavaScript: 'is fun!' }
// saveDataObject(
//     {
//      "vor name":'jens',
//      "nachname":'simon'
//     } ,"../database.json"    )


 /*saveShoppingListFor('727272', 'bread, cheese, chicken, banana');
saveShoppingListFor('727299', 'beer, water, beef');
console.log(loadDataObject('database.json')); // { '727272': 'bread, cheese, chicken, banana', '727299': 'beer, water, beef' }
updateShopingListFor('727272', 'chicken');
console.log(loadDataObject('database.json')); // { '727272': 'chicken', '727299': 'beer, water, beef' }
updateShopingListFor('727272');
console.log(loadDataObject('database.json')); // { '727299': 'beer, water, beef' }
*/