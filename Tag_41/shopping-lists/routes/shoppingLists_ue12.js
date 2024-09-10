const express = require('express');
const ShoppingList = require('./../models/shoppingList');
const ShoppingListEntry = require('./../models/shoppingListEntry')

// // mongodb
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/testi');
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => {
//   console.error('Database connection successful')



// });


// const {
//   readShoppingListOf,
//   saveShoppingListFor,
//   updateShopingListFor,
//   removeShoppingListEntryFor,
// } = require('jens-fs-json');

// npm i ./../fs-json@1.0.0

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  const shoppingList = await shoppingListForId(id, true);
  if (!shoppingList) {
    res.status(404).json({ error: 'The id does not exist.' });
    return;
  }

  const shortenedEntries = shortenEntries(shoppingList.entries);

  res.json({ id: shoppingList?.userId, entries: shortenedEntries });

  // res.json({ id: shoppingList?.userId, entries: shoppingList.entries });
});

function shortenEntries(entries) {
  return entries.map((entry) => (entry = { food: entry.food, createdAt: entry.createdAt }));
}




// Original Post - Route 
// router.post('/', async (req, res, next) => {
//   const { id, list } = req.body;

//   // mongodb - mongoose

//   // hier nur ein Test zum Prüfen des neuen Models
//   // let shoppingListEntry = await ShoppingListEntry.create({ food: "Wasser" })
//   // return 


//   let shoppingList = await ShoppingList.findOne({ userId: id });
//   console.log(shoppingList)
//   if (shoppingList) {
//     res.status(409).send('ID already exists');
//     return;
//   }

//   // console.log("shoppingList",shoppingList)
//   try {
//   // shoppingList = await ShoppingList.create({ userId: id, entries: list });
//   shoppingList = await ShoppingList.create({ userId: id });
//   }
//   catch(error) {
//     //console.log(error)
//     res.status(400).send('The request contains invalid data');
//     return
//   }
//   // saveShoppingListFor(id, list);

//   res.json({ error: `Saved new shopping list for User ${id} successfully!. Shoppinglist for ${id} created successfully`);
// });



// POST-route bis Übung 24
router.post('/', async (req, res) => {
  const { id, list } = req.body;

  let shoppingList = await shoppingListForId(id);
  if (shoppingList) {
    res.status(409).json({ error: 'ID already exists' });
    return;
  }

  shoppingList = await createShoppingList(id);
  if (!shoppingList) {
    res.status(400).json({ error: 'The request contains invalid data' });
    return;
  }

  const newEntriesIds = await createEntries(list);
  if (newEntriesIds.length === 0) {
    await ShoppingList.deleteOne({ userId: id });
    res.status(400).json({ error: 'The request contains invalid data' });
    return;
  }

  await addEntriesToShoppingList(newEntriesIds, shoppingList);

  res.json(req.body) // req Anfrage.body -> 
  // res.send(`Shopping list for ${id} created successfully`);
});



async function shoppingListForId(id, withDependancies = false) {
  const shoppingList = await ShoppingList.findOne({ userId: id });

  return withDependancies && shoppingList ?  shoppingList.populate('entries') : shoppingList;
}


async function createShoppingList(id) {
  try {
    return await ShoppingList.create({ userId: id, entries: [] });
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function createEntries(list) {
  const entries = [];

  try {
    for (const element of list.split(',').map((elem) => elem.trim())) {
      const entry = await ShoppingListEntry.create({ food: element });
      entries.push(entry._id);
    }
  } catch ({ message }) {
    console.error(message);
  }

  return entries;
}

async function addEntriesToShoppingList(entriyIds, shoppinglist) {
  entriyIds.forEach((entryId) => shoppinglist.entries.push(entryId));
  await shoppinglist.save();
}


router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { list } = req.body

  let shoppingList = await shoppingListForId(id, true)
  if (!shoppingList) {
      res.status(404).json({ error: 'No list found for the provided id.' })
      return
  }

  const newEntriesIds = await createEntries(list)
  if (newEntriesIds.length === 0) {
      await ShoppingList.deleteOne({ userId: id })
      res.status(400).json({ error: 'The shopping list must contain items.' })
      return
  }

  const entryIds = await resetEntriesOfList(shoppingList)
  await ShoppingListEntry.deleteMany({ _id: entryIds })

  await addEntriesToShoppingList(newEntriesIds, shoppingList)

  shoppingList = await shoppingListForId(id, true)
  const shortenedEntries = shortenEntries(shoppingList.entries)

  res.json({ id: shoppingList.userId, entries: shortenedEntries })
})

router.delete('/:id',async  (req, res, next) => {
  const { id } = req.params;
  // removeShoppingListEntryFor(id);
  // res.send(`Deleted shopping list for User ${id} successfully!`);

  const shoppingList = await shoppingListForId(id);
  if (!shoppingList) {
    res.status(404).json({ error: 'The id does not exist.' });
    return;
  }

  await shoppingList.deleteOne({userId:id})
  res.status(204).json()

});

router.delete('/:id/:entryName', async (req, res) => {
  const { id, entryName } = req.params

  const shoppingList = await shoppingListForId(id, true)
  if (!shoppingList) {
      res.status(404).json({ error: 'The id does not exist.' })
      return
  }

  const entryId = shoppingList.entries.filter(({ food }) => food === entryName.toLowerCase())[0]?.id

  if (!entryId) {
      res.status(404).json({ error: 'The element does not exist.' })
      return
  }

  const entryToDelete = await ShoppingListEntry.findOne({ _id: entryId })
  await entryToDelete.remove()

  res.status(204).json()
})

module.exports = router;