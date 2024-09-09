const express = require('express');
// // mongodb
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/testi');
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => {
//   console.error('Database connection successful')



// });


const {
  readShoppingListOf,
  saveShoppingListFor,
  updateShopingListFor,
  removeShoppingListEntryFor,
} = require('jens-fs-json');

// npm i ./../fs-json@1.0.0

const router = express.Router();

router.get('/:id',  (req, res, next) => {
  const { id } = req.params;
  res.send(`Shopping list for User ${id}: ${readShoppingListOf(id)}`);
//   // Insert a simple document into a collection
// db.collection('users').insertOne({ u: 'jens', p: '__geheim_' }, (err, result) => {
//   if (err) { 
//       console.error('Error inserting document:', err);
//   } else {
//       console.log('Document inserted:', result);
//   }
// });
});

router.post('/', (req, res, next) => {

    // const userId = req.body.userId
    // const inhalt = req.body.inhalt


  const { id, list } = req.body;
  saveShoppingListFor(id, list);
  res.send(`Saved new shopping list for User ${id} successfully!`);
});

router.put('/', (req, res, next) => {
  const { id, list } = req.body;
  updateShopingListFor(id, list);
  res.send(`Updated shopping list for User ${id} successfully!`);
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  removeShoppingListEntryFor(id);
  res.send(`Deleted shopping list for User ${id} successfully!`);
});

router.delete('/:id/:entry', (req, res, next) => {
  const { id, entry } = req.params;
  removeShoppingListEntryFor(id, entry);
  res.send(`Removed ${entry} from User ${id}'s shopping list successfully!`);
});

module.exports = router;