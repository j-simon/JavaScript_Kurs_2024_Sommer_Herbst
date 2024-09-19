const User = require('../models/user');
const ShoppingList = require('../models/shoppingList');

async function usernameAvailable(req, res, next) {
  const { username } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ username: username });
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  if (existingUser) {
    res.status(400).json({ error: 'Username already taken' });
    return;
  }
  next();
}

async function createIdForList(req, res, next) {
  const userId = req.body.userId;
  let potentialId;
  let idInvalid;
  do {
    potentialId = makeSixDigits(randomId());
    try {
      idInvalid = await idExists(potentialId, userId);
    } catch (err) {
      res.status(400).json({ error: err.message });
      return;
    }
  } while (idInvalid);
  req.body.id = potentialId;
  next();
}

// async function idTaken(req, res, next) {
//   const id = '909090';
//   if (!(await idExists(id))) {
//     res.status(404).json({ error: 'The id does not exist.' });
//     return;
//   }
//   next();
// }

// async function entryExists(req, res, next) {
//   const id = '909090';
//   const entryName = req.params.entryName;

//   const shoppingList = await shoppingListForId(id, true);
//   const entryId = shoppingList.entries.filter(({ food }) => food === entryName.toLowerCase())[0]?.id;

//   if (entryId === undefined) {
//     res.status(404).json({ error: 'The element does not exist.' });
//     return;
//   }

//   next();
// }

// --------------------------------- helper ---------------------------------
async function completeListsFor(userId) {
console.log('completeListsFor userId --->', userId);
  let usersLists;
  try {

    usersLists = (await User.findOne({ _id: userId }).populate('lists')).lists;
    console.log('usersLists --->', usersLists);


  } catch (err) {
    throw new Error(err);
  }
  for (let index in usersLists) {
    try {
      usersLists[index] = await usersLists[index]?.populate('entries');
    } catch (err) {
      throw new Error(err);
    }
  }
  return usersLists;
}

function usersListForId(listId, usersLists) {
  console.log('usersLists --->', usersLists);
  console.log('listId --->', listId);

  return usersLists.filter((list) => list.shoppingListId === listId)[0];
}

function entryWithName(entryName, targetList) {
  return targetList.entries.filter((entry) => entry.food === entryName)[0];
}

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

async function checkListId(req, res, next) {
  const { userId, listId } = req.params;

  let usersLists;
  try {
    usersLists = await completeListsFor(userId);
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  if (!usersLists || usersLists.length === 0) {
    res.status(404).json({ error: 'No lists found for user' });
    return;
  }

  const targetList = usersListForId(listId, usersLists);
  if (!targetList || targetList.length === 0) {
    res.status(404).json({ error: 'Selected list not found' });
    return;
  }

  req.list = targetList;

  next();
}
async function checkEntryName(req, res, next) {
  const { entryName } = req.params;
  console.log('entryName --->', entryName);

  const list = req.list;

  const targetEntry = entryWithName(entryName, list);
  if (!targetEntry) {
    res.status(404).json({ error: 'Selected entry not found' });
    return;
  }

  req.entry = targetEntry;
  console.log('req.entry --->', req.entry);
  console.log('targetEntry --->', targetEntry);
  console.log('entryName --->', entryName);
  next();
}

async function idExists(id, userId) {
  let lists;
  try {
    lists = (await User.findOne({ _id: userId })).lists;
  } catch (err) {
    throw new Error(err);
  }

  return lists.some((objectId) => objectId.toHexString() === id);
}

function randomId() {
  return String(Math.floor(Math.random() * 1000000));
}

function makeSixDigits(num) {
  if (num.length === 6) return num;

  return makeSixDigits(`0${num}`);
}


async function allLists(req, res, next) {
  const userId = req.params.userId;

  let usersLists;
  try {
    usersLists = await completeListsFor(userId);
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  if (!usersLists || usersLists.length === 0) {
    res.status(404).json({ error: 'No lists found for user' });
    return;
  }

  console.log('req.lists vorher --->', req.lists);
  req.lists = usersLists;
  console.log('req.lists nachher --->', req.lists);

  next();
}

module.exports = {
  usernameAvailable,
  createIdForList,
  checkListId,
  checkEntryName,
  allLists
  // idTaken,
  // entryExists,
};