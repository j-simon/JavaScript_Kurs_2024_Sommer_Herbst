const ShoppingList = require('../models/shoppingList');
const User = require('../models/user');

// neu 7.2
async function createIdForList(req, res, next) {
  const userId = req.user.id;
  let potentialId;
  let idInvalid;
  do {
    potentialId = makeSixDigits(randomId());
    idInvalid = await idExists(potentialId, userId);
  } while (idInvalid);
  req.body.id = potentialId;
  next();
}
function makeSixDigits(num) {
  if (num.length === 6) return num;

  return makeSixDigits(`0${num}`);
}
function randomId() {
  return String(Math.floor(Math.random() * 1000000));
}

// ...

async function idExists(id, userId) {
  const lists = (await User.findOne({ _id: userId })).lists;

  return lists.some((objectId) => objectId.toHexString() === id);
}

function validId(req, res, next) {
  console.log("validId")
  const id = req.body?.id || req.params?.id;
  if (!(typeof id === 'string' && id.trim().length === 6 && !Number.isNaN(Number(id)))) {
    res.status(422).json({ error: 'Invalid UserID' });
    return;
  }
  next();
}

// uebungen_36 und 37
function validList(req, res, next) {
  console.log("validList")
  let list = req.body?.list || req.params?.list;
  console.log("list", list)
  if (typeof list == "string") {
    list = list
      .split(',')
      .map((elem) => String(elem).trim())
      .filter((elem) => elem !== '');

    console.log("validList-middleware", list)
    if (list.length <= 0) {
      res.status(422).json({ error: 'List does not contain valid items' });
      return;
    }
  }
  else { // array - ohne split
    list = list
   
    .map((elem) => String(elem).trim())
    .filter((elem) => elem !== '');

  console.log("validList-middleware", list)
  if (list.length <= 0) {
    res.status(422).json({ error: 'List does not contain valid items' });
    return;
  }
  }
  req.body.list ? (req.body.list = list) : (req.params.list = list);
  next();
}

async function idFree(req, res, next) {
  console.log("idFree")
  const id = req.body?.id || req.params?.id;
  let shoppingList = await shoppingListForId(id);
  if (shoppingList !== null) {
    res.status(409).json({ error: 'The id is already taken.' });
    return;
  }
  next();
}

// --------------------------------- helper ---------------------------------
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



module.exports = {
  createIdForList,
  validList,
  
  
  
};
