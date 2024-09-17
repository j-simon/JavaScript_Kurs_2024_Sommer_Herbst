const express = require('express')
const User = require('../../models/user')
const ShoppingList = require('../../models/shoppingList')
const ShoppingListEntry = require('../../models/shoppingListEntry')

// const {
//     usernameAvailable,
//     createIdForList,
//     idTaken,
//     entryExists,
// } = require('../../middlewares/shoppingLists.middleware')
const { createIdForList, checkListId, checkEntryName } = require('../../middlewares/shoppingLists.middleware');
const router = express.Router()

router.get('/:id', async (req, res) => {
    const { id } = req.params

    const shoppingList = await shoppingListForId(id, true)
    if (!shoppingList) {
        res.status(404).json({ error: 'The id does not exist.' })
        return
    }

    const shortenedEntries = shortenEntries(shoppingList.entries)

    res.json({ id: shoppingList.userId, entries: shortenedEntries })
})

router.post('/',createIdForList, async (req, res) => {
    const { userId, id, list } = req.body;
  
    let shoppingList = await createShoppingList(id);
    if (!shoppingList) {
      res.status(400).json({ error: 'An error occurred while creating new shopping list.' });
      return;
    }
  
    const newEntriesIds = await createEntries(list);
    await addEntriesToShoppingList(newEntriesIds, shoppingList);
    const user = await User.findOne({ _id: userId });
    await addShoppingListToUser(shoppingList, user);
  
    shoppingList = await shoppingListForId(id, true);
    const shortenedEntries = shortenEntries(shoppingList.entries);
  
    res.json({ id: shoppingList?.userId, entries: shortenedEntries });
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
  
    await list.deleteOne({ _id: list.id });
  
    res.json({ message: 'Deleted list successfully' });
  });
  
  router.delete('/:userId/:listId/:entryName', [checkListId, checkEntryName], async (req, res) => {
    console.log("api delete userid/listnum/entryid")
    const entry = req.entry;
console.log('req.entry --->', req.entry);
  
    await entry.remove();
  
    res.json({ message: `Deleted ${entry.food} successfully` });
  });


async function shoppingListForId(id, withDependancies = false) {
    const shoppingList = await ShoppingList.findOne({ userId: id })

    return withDependancies && shoppingList
        ? shoppingList.populate('entries')
        : shoppingList
}

async function createShoppingList(id) {
    try {
        // 7.2
        return await ShoppingList.create({ shoppingListId : id, entries: [] })
    } catch (error) {
        console.log("error",error)
        return null
    }
}

async function createEntries(list) {
    const entries = []

    try {
        // for (const element of list.split(',').map((elem) => elem.trim())) {
        //     const entry = await ShoppingListEntry.create({ food: element })
        //     entries.push(entry._id)
        // }
        for (const element of list) {
            const entry = await ShoppingListEntry.create({ food: element });
            entries.push(entry._id);
        }

    } catch ({ message }) {
        console.error("error=",message)
    }

    return entries
}

async function addEntriesToShoppingList(entriyIds, shoppinglist) {
    entriyIds.forEach((entryId) => shoppinglist.entries.push(entryId))
    await shoppinglist.save()
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
    await user.save();
  }

module.exports = router
