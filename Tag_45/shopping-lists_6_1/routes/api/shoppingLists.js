const express = require('express')
const ShoppingList = require('../../models/shoppingList')
const ShoppingListEntry = require('../../models/shoppingListEntry')

// Kapitel 6.1
const { validId, validList, idFree } = require('../../middlewares/shoppingLists.middleware');


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

// Kapitel 6.1 middleware für die route
// router.post('/', async (req, res) => {
// router.post('/',validId, async (req, res) => {
router.post('/', [validId, validList, idFree], async (req, res) => {

    const { id, list } = req.body
    console.log("post , was ist im body.list ? ", list)
    console.log("post , was ist der typ von body.list ? ",typeof list)
    // let shoppingList = await shoppingListForId(id)
    // if (shoppingList) {
    //     res.status(409).json({ error: 'The id is already taken.' })
    //     return
    // }

    let shoppingList = await createShoppingList(id)
    if (!shoppingList) {
        res.status(400).json({ error: 'An error occurred while creating new shopping list.' })
        return
    }

    const newEntriesIds = await createEntries(list)

    // if (newEntriesIds.length === 0) {
    //     await ShoppingList.deleteOne({ userId: id })
    //     res.status(400).json({ error: 'The shopping list must contain items.' })
    //     return
    // }

    await addEntriesToShoppingList(newEntriesIds, shoppingList)

    shoppingList = await shoppingListForId(id, true)
    const shortenedEntries = shortenEntries(shoppingList.entries)

    res.json({ id: shoppingList.userId, entries: shortenedEntries })
    
})

router.patch('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    const shoppingList = await shoppingListForId(id)
    if (!shoppingList) {
        res.status(404).json({ error: 'The id does not exist.' })
        return
    }

    await shoppingList.deleteOne({ userId: id })

    res.status(204).json()
})

router.delete('/:id/:entryName', async (req, res) => {
    const { id, entryName } = req.params
    console.log("entryName",entryName)
    const shoppingList = await shoppingListForId(id, true)
    if (!shoppingList) {
        res.status(404).json({ error: 'The id does not exist.' })
        return
    }

    const entryId = shoppingList.entries.filter(({ food }) => food === entryName.toLowerCase())[0]?.id
    console.log('entryId --->', entryId);

    if (!entryId) {
        res.status(404).json({ error: 'The element does not exist.' })
        return
    }

    const entryToDelete = await ShoppingListEntry.findOne({ _id: entryId })
    console.log('entryToDelete --->', entryToDelete);
    
    await entryToDelete.remove() // remove() war deprecated und ist in der 6er Verson noch drin in der 8. nicht mehr drin
   // oder ersetzen mit  await entryToDelete.deleteOne({_id:entryToDelete})

    res.status(204).json()
})

async function shoppingListForId(id, withDependancies = false) {
    const shoppingList = await ShoppingList.findOne({ userId: id })

    return withDependancies && shoppingList
        ? shoppingList.populate('entries')
        : shoppingList
}

async function createShoppingList(id) {
    try {
        return await ShoppingList.create({ userId: id, entries: [] })
    } catch (error) {
        console.log(error)
        return null
    }
}

async function createEntries(list) {
    console.log("createEntries list",list)
    console.log("createEntries typeof list", typeof list)
    // list [ 'aa', 'bb', 'cc' ]
    // typeof list object
    const entries = []

    try {
        // for (const element of list.split(',').map((elem) => elem.trim())) {
        //     const entry = await ShoppingListEntry.create({ food: element })
        //     entries.push(entry._id)
        // }
        for (const element of list) {
            console.log("element",element)
            const entry = await ShoppingListEntry.create({ food: element });
            entries.push(entry._id);
        }

    } catch ({ message }) {
        console.error(message)
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

module.exports = router
