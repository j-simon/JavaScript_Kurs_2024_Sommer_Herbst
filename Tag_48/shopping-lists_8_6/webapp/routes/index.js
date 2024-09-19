var express = require('express');
var router = express.Router();
// const { validList } = require('../middlewares/index.middleware');

const { validList, validEntryName, checkShareWith } = require('../middlewares/index.middleware');

// ...

/* GET home page. */
router.get('/', async function (req, res, next) {
  const userId = req.user.id;
  console.log('userId --->', userId);
  const userData = await (await fetch(`http://localhost:3001/api/${userId}`)).json();
  console.log('userData --->', userData);

  res.render('index', { lists: userData.lists, username: req.user.username });
  // ../views/index.ejs

});

router.get('/addList', function (req, res, next) {
  res.render('addList', { javascript: "addList.js", username: req.user.username });
});

router.post('/addList', [checkShareWith, validList], async (req, res) => {
  let result;
  try {
    const response = await fetch('http://localhost:3001/api/', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ userId: req.user?._id, ...req.body }),
    });
    result = await response.json();
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  const responseObject = { id: result.id, listName: result.listName, entries: result.entries };
  if (result.shareWith) {
    const io = req.app.get('socket.io');
    console.log('io --->', io);
    const usernameSocketId = req.app.get('username-socketId');

    for (const username of req.body.shareWith) {
      io.to(usernameSocketId[username]).emit('receiveList', responseObject);
    }
  }

  res.json(responseObject);
});

// router.delete('/:listId', async (req, res) => {
//   const { listId } = req.params;
//   const userId = req.user.id;
//   const response = await fetch(`http://localhost:3001/api/${userId}/${listId}`, {
//     headers: { 'Content-Type': 'application/json' },
//     method: 'DELETE',
//   });

//   const result = await response.json();

//   res.json(result);
// });


router.delete('/:listId', async (req, res) => {
console.log("delete/listId")
  
  const { listId } = req.params;
  const userId = req.user?._id;
console.log('userId --->', userId);
  console.log('listId --->', listId);
  let result;
  try {
    const response = await fetch(`http://localhost:3001/api/${userId}/${listId}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
    });
    result = await response.json();
    console.log("router.delete('/:listId', result --->", result);
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  if (result.sharedUsernames.length > 0) {
    const io = req.app.get('socket.io');
    const usernameSocketId = req.app.get('username-socketId');

    for (const username of result.sharedUsernames) {
      io.to(usernameSocketId[username]).emit('shoppingList:deleteList', listId);
    }
  }

  res.json(result);
});
// router.delete('/:listId/:entryName', validEntryName, async (req, res) => {
//   const { listId, entryName } = req.params;
//   const userId = req.user.id;

//   console.log('entryName --->', entryName);
//   console.log('listId --->', listId);
//   console.log('userId --->', userId);

//   const response = await fetch(`http://localhost:3001/api/${userId}/${listId}/${entryName}`, {
//     // console.log(`http://localhost:3001/api/${userId}/${listId}/${entryName} --->`);

//     // const response = await fetch(`http://localhost:3001/api/${userId}/1/3`, {

//     headers: { 'Content-Type': 'application/json' },
//     method: 'DELETE',
//   });

//   const result = await response.json();

//   res.json(result);
// });

router.delete('/:listId/:entryName', validEntryName, async (req, res) => {
  const { listId, entryName } = req.params;
  const userId = req.user?._id;

  
  let result;
  try {
    const response = await fetch(`http://localhost:3001/api/${userId}/${listId}/${entryName}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
    });
    result = await response.json();
console.log('result --->', result);
  } catch (err) {
    res.status(400).json({ error: err.message });
    return;
  }

  if (result.sharedUsernames.length > 0) {
    const io = req.app.get('socket.io');
    const usernameSocketId = req.app.get('username-socketId');
    const response = { listId, entryName };

    for (const username of result.sharedUsernames) {
      console.log('usernameSocketId --->', username, usernameSocketId);
      
      console.log('result.entrysListDeleted --->', result.entrysListDeleted);

      result.entrysListDeleted

        ? io.to(usernameSocketId[username]).emit('shoppingList:deleteList', listId)

        : io.to(usernameSocketId[username]).emit('shoppingList:deleteListEntry', response);
    }
  }

  res.json(result);
});

module.exports = router;
