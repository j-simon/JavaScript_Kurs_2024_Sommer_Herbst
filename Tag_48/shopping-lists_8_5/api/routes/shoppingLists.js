const express = require('express')
const User = require('../models/user')
const ShoppingList = require('../models/shoppingList')
const ShoppingListEntry = require('../models/shoppingListEntry')

// const {
//     usernameAvailable,
//     createIdForList,
//     idTaken,
//     entryExists,
// } = require('../../middlewares/shoppingLists.middleware')
const { usernamesToIds,
  createIdForList,
  checkListId,
  checkEntryName,
  allLists,
} = require('../middlewares/shoppingLists.middleware');
const router = express.Router()

// router.get('/:id', async (req, res) => {
//     const { id } = req.params

//     const shoppingList = await shoppingListForId(id, true)
//     if (!shoppingList) {
//         res.status(404).json({ error: 'The id does not exist.' })
//         return
//     }

//     const shortenedEntries = shortenEntries(shoppingList.entries)

//     res.json({ id: shoppingList.userId, entries: shortenedEntries })
// })

router.get('/:userId', allLists, async (req, res) => {
  console.log("GET /userId",)
  const lists = req.lists;
  console.log('lists --->', lists);

  const shortenedLists = shortenedUsersLists(lists);


  res.json({ lists: shortenedLists });
});


// alt function shortenedUsersLists(usersLists) {
//   const shortenedLists = [];

//   usersLists.forEach((list) => {
//     const data = {};

//     data[list.shoppingListId] = shortenEntries(list.entries);


//     shortenedLists.push(data);
//   });
//   return shortenedLists;
// }
function shortenedUsersLists(usersLists) {
  const shortenedLists = [];
  usersLists.forEach((list) => {
    const data = {
      listId: list.shoppingListId,
      listName: list.name,
      entries: shortenEntries(list.entries),
    };
    shortenedLists.push(data);
  });
  return shortenedLists;
}

router.post('/', [usernamesToIds, createIdForList], async (req, res) => {
  const { userId, id, list, shareWith, listName } = req.body;

  let shoppingList;
  try {
    shoppingList = await createShoppingList(id, listName);
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }
  if (!shoppingList) {
    res.status(400).json({ error: 'An error occurred while creating new shopping list.' });
    return;
  }

  try {
    const newEntriesIds = await createEntries(list);
    await addEntriesToShoppingList(newEntriesIds, shoppingList);
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }

 

  try {
    const user = await User.findOne({ _id: userId });
    await addShoppingListToUser(shoppingList, user);
    await addShoppingListToShareUsers(shoppingList, shareWith);
    shoppingList = await shoppingListForId(id, true);
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  const shortenedEntries = shortenEntries(shoppingList.entries);



  // res.json({ id: shoppingList?.userId, entries: shortenedEntries });
  const responseJSON =
    shareWith.length > 0
      ? { id: shoppingList.shoppingListId, listName: shoppingList.name, entries: shortenedEntries, shareWith }
      : { id: shoppingList.shoppingListId, listName: shoppingList.name, entries: shortenedEntries };

  res.json(responseJSON);
});
// Kapitel 6.1 middleware für die route
// router.post('/', async (req, res) => {
// router.post('/',validId, async (req, res) => {
// router.post('/', [validId, validList, idFree], async (req, res) => {

//     const { id, list } = req.body
// console.log("post")
//     // let shoppingList = await shoppingListForId(id)
//     // if (shoppingList) {
//     //     res.status(409).json({ error: 'The id is already taken.' })
//     //     return
//     // }

//     let shoppingList = await createShoppingList(id)
//     if (!shoppingList) {
//         res.status(400).json({ error: 'An error occurred while creating new shopping list.' })
//         return
//     }

//     const newEntriesIds = await createEntries(list)

//     // if (newEntriesIds.length === 0) {
//     //     await ShoppingList.deleteOne({ userId: id })
//     //     res.status(400).json({ error: 'The shopping list must contain items.' })
//     //     return
//     // }

//     await addEntriesToShoppingList(newEntriesIds, shoppingList)

//     shoppingList = await shoppingListForId(id, true)
//     const shortenedEntries = shortenEntries(shoppingList.entries)

//     res.json({ id: shoppingList.userId, entries: shortenedEntries })
// })

// PAtch in 7.2 entefernt - keine Updates vorgesehen
// router.patch('/:id', async (req, res) => {
//     const { id } = req.params
//     const { list } = req.body

//     let shoppingList = await shoppingListForId(id, true)
//     if (!shoppingList) {
//         res.status(404).json({ error: 'No list found for the provided id.' })
//         return
//     }

//     const newEntriesIds = await createEntries(list)
//     if (newEntriesIds.length === 0) {
//         await ShoppingList.deleteOne({ userId: id })
//         res.status(400).json({ error: 'The shopping list must contain items.' })
//         return
//     }

//     const entryIds = await resetEntriesOfList(shoppingList)
//     await ShoppingListEntry.deleteMany({ _id: entryIds })

//     await addEntriesToShoppingList(newEntriesIds, shoppingList)

//     shoppingList = await shoppingListForId(id, true)
//     const shortenedEntries = shortenEntries(shoppingList.entries)

//     res.json({ id: shoppingList.userId, entries: shortenedEntries })
// })



router.delete('/:userId/:listId', checkListId, async (req, res) => {
  const list = req.list;

  try {
    await list.deleteOne({ _id: list.id });
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  res.json({ message: 'Deleted list successfully' });
});

router.delete('/:userId/:listId/:entryName', [checkListId, checkEntryName], async (req, res) => {
  const entry = req.entry;

  try {
    await entry.remove();
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  res.json({ message: `Deleted ${entry.food} successfully` });
});


async function shoppingListForId(id, withDependancies = false) {
  let shoppingList = null;

  try {
    shoppingList = await ShoppingList.findOne({ userId: id });

    if (shoppingList && withDependancies) {
      shoppingList = await shoppingList.populate('entries');
    }
  } catch (error) {
    throw new Error(error);
  }

  return shoppingList;
}


async function createShoppingList(id, listName) {
  try {
    return await ShoppingList.create({ shoppingListId: id, name: listName, entries: [] });
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createEntries(list) {
  const entries = [];

  try {
    for (const element of list) {
      const entry = await ShoppingListEntry.create({ food: element });
      entries.push(entry._id);
    }
  } catch (err) {
    throw new Error(err);
  }

  return entries;
}

async function addEntriesToShoppingList(entriyIds, shoppinglist) {
  entriyIds.forEach((entryId) => shoppinglist.entries.push(entryId));
  try {
    await shoppinglist.save();
  } catch (err) {
    throw new Error(err);
  }
}

function shortenEntries(entries) {
  return entries.map((entry) => (entry = { food: entry.food, createdAt: entry.createdAt }))
}

async function resetEntriesOfList(shoppingList) {
  const entryIds = []
  shoppingList.entries.forEach(({ id }) => entryIds.push(id))
  shoppingList.entries = []
  await shoppingList.save()
  return entryIds
}

async function addShoppingListToUser(shoppingList, user) {
  user.lists.push(shoppingList);
  try {
    await user.save();
  } catch (err) {
    throw new Error(err);
  }
}

async function addShoppingListToShareUsers(shoppingList, shareWith) {
  for (const userId of shareWith) {
    try {
      const user = await User.findOne({ _id: userId });
      await addShoppingListToUser(shoppingList, user);
    } catch (err) {
      throw new Error(err);
    }
  }
}
module.exports = router
