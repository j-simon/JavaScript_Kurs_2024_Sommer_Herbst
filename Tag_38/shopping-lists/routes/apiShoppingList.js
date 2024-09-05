var express = require('express');
var router = express.Router();

const database = {
    "123": "inhalt von 123",
    "456": "inhalt von 456",
  }
  
  //////////////////////////////////////////
  ///////// G E T //////////////////////////
  // http://localhost:3000/test_methode/123
  // http://localhost:3000/test_methode/456
  router.get('/:userId', (req, res) => {
    console.log("req.originalUrl", req.originalUrl); // 1. url 
    console.log("req.method", req.method) // 2. methode
    console.log("req.params.userId", req.params.userId) // parameter für userId, als parametrisierte url
    console.log("database", database)
    if (database[req.params.userId] != undefined)
      res.status(200).send(database[req.params.userId]);
    else
      res.status(404).send("");
  
  });
  
  
  //////////////////////////////////////////
  ///////// P O S T ////////////////////////
  router.post('/', (req, res) => {
    console.log("req.originalUrl", req.originalUrl); // 1. url 
    console.log("req.method", req.method) // 2. methode
    // console.log("req.params.userId", req.params.userId) // parameter für userId, als parametrisierte url
    const userId = req.body.userId
    console.log('userID --->', userId);
    const inhalt = req.body.inhalt
    console.log('inhalt --->', inhalt);
  
  
    if (database[req.params.userId] != undefined)  // vorhanden
      res.status(404).send("");
  
    else {
      database[userId] = inhalt
      console.log("database", database)
      res.status(200).send("");
    }
  
  });
  
  //////////////////////////////////////////
  ///////// D E L E T E/////////////////////
  router.delete('/:userId', (req, res) => {
    console.log("req.originalUrl", req.originalUrl); // 1. url 
    console.log("req.method", req.method) // 2. methode
    console.log("req.params.userId", req.params.userId) // parameter für userId, als parametrisierte url
    console.log("database", database)
    if (database[req.params.userId] != undefined) {
      delete database[req.params.userId] // löschen
      console.log("database", database)
      res.status(200).send("") //
  
    }
  
    else
      res.status(404).send("");
  
  });
  
  
  //////////////////////////////////////////
  ///////// P U T //////////////////////////
  router.put('/', (req, res) => {
    console.log("req.originalUrl", req.originalUrl); // 1. url 
    console.log("req.method", req.method) // 2. methode
    // console.log("req.params.userId", req.params.userId) // parameter für userId, als parametrisierte url
    const userId = req.body.userId
    console.log('userID --->', userId);
    const inhalt = req.body.inhalt
    console.log('inhalt --->', inhalt);
  
  
    if (database[userId] != undefined) { // vorhanden
    
      database[userId] = inhalt
      console.log("database", database)
      res.status(200).send("");
    } else { 
      res.status(404).send("");
    }
  
  });
  
module.exports = router;