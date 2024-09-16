const ShoppingList = require('../models/shoppingList');

function validId(req, res, next) {
    const id = req.body?.id || req.params?.id;
    if (!(typeof id === 'string' && id.trim().length === 6 && !Number.isNaN(Number(id)))) {
      res.status(422).json({ error: 'Invalid UserID' });
      return;
    }
    next();
  }

  // uebungen_36 und 37
  function validList(req, res, next) {
    let list = req.body?.list || req.params?.list;
    console.log("valid_list am anfang : post , was ist der body.list?",typeof list)
    console.log("valid_list am anfang : post , was ist req.body.list?", req.body.list)
    list = list
      .split(',')
      .map((elem) => String(elem).trim())
      .filter((elem) => elem !== '');
      console.log("validList-middleware", list)
    if (list.length <= 0) {
      res.status(422).json({ error: 'List does not contain valid items' });
      return;
    }
    req.body.list ? (req.body.list = list) : (req.params.list = list);
    console.log("valid_list am ende : post , was ist der body.list?",typeof req.body.list)
    console.log("valid_list am ende : post , was ist der req.body.list?", req.body.list)
 
    next();
  }
  
  async function idFree(req, res, next) {
    console.log("idFree am anfang : post , was ist der body.list?",typeof list)
    console.log("idFree am anfang : post , was ist req.body.list?", req.body.list)
   
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
  validId,
  validList,
  idFree,
};
