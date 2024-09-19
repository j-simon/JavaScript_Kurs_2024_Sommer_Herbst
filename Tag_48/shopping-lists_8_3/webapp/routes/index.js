var express = require('express');
var router = express.Router();
// const { validList } = require('../middlewares/index.middleware');

const { validList, validEntryName } = require('../middlewares/index.middleware');

// ...

/* GET home page. */
router.get('/', async  function(req, res, next) {
  const userId = req.user.id;
console.log('userId --->', userId);
  const userData = await (await fetch(`http://localhost:3001/api/${userId}`)).json();
console.log('userData --->', userData);
  
  res.render('index', { lists: userData.lists ,username: req.user.username });
  // ../views/index.ejs
  
});

router.get('/addList', function (req, res, next) {
  res.render('addList',{javascript:"addList.js"});
});

// Kapitel 7.2 post neu , jetzt per fetch aufs api (also intern!)
router.post('/addList',  validList, async (req, res) => {
  const response = await fetch('http://localhost:3001/api', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ userId: req.user.id, ...req.body }),
  });

  const result = await response.json();

  res.json(result);
});

router.delete('/:listId', async (req, res) => {
  const { listId } = req.params;
  const userId = req.user.id;
  const response = await fetch(`http://localhost:3001/api/${userId}/${listId}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'DELETE',
  });

  const result = await response.json();

  res.json(result);
});

router.delete('/:listId/:entryName', validEntryName, async (req, res) => {
  const { listId, entryName } = req.params;
  const userId = req.user.id;

  console.log('entryName --->', entryName);
console.log('listId --->', listId);
console.log('userId --->', userId);
  
  const response = await fetch(`http://localhost:3001/api/${userId}/${listId}/${entryName}`, {
 
    headers: { 'Content-Type': 'application/json' },
    method: 'DELETE',
  });

  const result = await response.json();

  res.json(result);
});


module.exports = router;
