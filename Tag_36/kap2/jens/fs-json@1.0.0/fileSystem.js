const { readFileSync, writeFileSync } = require('fs');

///////////////////////////////////////////////////////////////////////////////
// Original Funktionen aus dem Kapitel 2 - WBT
// Arrow-Function-Style, wie wir ihn gelernt haben, ist auch möglich!
function saveDataObject(dataObject, database = 'database.json') {
    writeFileSync(database, JSON.stringify(dataObject));
}

function loadDataObject(database = 'database.json') {
    const data = readFileSync(database);
    const FALLBACK_VALUE = '{}';

    return JSON.parse(data.byteLength > 0 ? data : FALLBACK_VALUE);
}


function readShoppingListOf(userId, database = 'database.json') {
    return loadDataObject(database)[userId] || '';
}

function saveShoppingListFor(userId, list, database = 'database.json') {
    let databaseObject = loadDataObject(database);

    databaseObject = addToList(userId, list,databaseObject);

    saveDataObject(databaseObject, database);
}

function addToList(userId,list, databaseObject) {
    databaseObject[userId] = databaseObject[userId] ? databaseObject[userId].concat(`, ${list}`) : list;
    return databaseObject;
}

function removeShoppingListEntryFor(userId, entry = '', database = 'database.json') {
    let databaseObject = loadDataObject(database);
    console.log(databaseObject)

    console.log(userId,entry)
    databaseObject = removeFromList(userId, entry, databaseObject);
    console.log(databaseObject)
 
    saveDataObject(databaseObject, database);
}

function removeFromList(userId, entry, databaseObject) {
console.log('userId --->', userId);
    
    //databaseObject={"727272":{}}
    if (!databaseObject[userId] || !databaseObject[userId].includes(entry)) return databaseObject;

    if (entry) {
        databaseObject[userId] = databaseObject[userId]
          .split(', ')
          .filter((elem) => elem !== entry)
          .join(', ');
      } else {
        delete databaseObject[userId];
      }
    
      return databaseObject;
}

function updateShopingListFor(userId, list = '', database = 'database.json') {
    let databaseObject = loadDataObject(database);
  
    databaseObject = removeFromList(userId, '', databaseObject);
console.log('databaseObject --->', databaseObject);
    
    if (list) databaseObject = addToList( userId,list, databaseObject);
      
    saveDataObject(databaseObject, database);
  }
  


/*
exports.saveShoppingListFor = saveShoppingListFor;
exports.updateShopingListFor = updateShopingListFor;
exports.removeShoppingListEntryFor = removeShoppingListEntryFor
exports.readShoppingListOf=readShoppingListOf
*/

module.exports = {
    saveShoppingListFor,
    readShoppingListOf,
    updateShopingListFor,
    removeShoppingListEntryFor,
};
saveShoppingListFor('727272', 'bread, cheese, chicken, banana');
saveShoppingListFor('727299', 'beer, water, beef');
console.log(loadDataObject('database.json')); // { '727272': 'bread, cheese, chicken, banana', '727299': 'beer, water, beef' }
updateShopingListFor('727272', 'chicken');
console.log(loadDataObject('database.json')); // { '727272': 'chicken', '727299': 'beer, water, beef' }
updateShopingListFor('727272');
console.log(loadDataObject('database.json')); // { '727299': 'beer, water, beef' }


// readShoppingListOf(11)
// saveShoppingListFor(11,"Tee, Kuchen")
// saveShoppingListFor(11)
// readShoppingListOf(11)
// updateShopingListFor(11,"Keks, Zimt")
// // // updateShopingListFor(11)
// // readShoppingListOf(11)
// removeShoppingListEntryFor(11,"Keks")
// // removeShoppingListEntryFor(11)