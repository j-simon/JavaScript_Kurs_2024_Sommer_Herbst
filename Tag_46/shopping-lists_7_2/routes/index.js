var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const { validUsername, usernameAvailable, validPassword } = require('../middlewares/index.middleware');
const User = require('../models/user');
const { createIdForList, validList  } = require('../middlewares/shoppingLists.middleware');

// async function createIdForList(req, res, next) {
//   let potentialId = makeSixDigits(randomId());

//   next();
// }

function randomId() {
  return String(Math.floor(Math.random() * 1000000));
}

// ...

function makeSixDigits(num) {
  if (num.length === 6) return num;

  return makeSixDigits(`0${num}`);
}

/* GET home page. */
router.get('/', async  function(req, res, next) {
  const userData = await (await fetch('http://localhost:3000/api/909090')).json();
  res.render('index', { list: userData.entries ,username: req.user.username });
  // ../views/index.ejs
  
});

router.get('/addList', function (req, res, next) {
  res.render('addList',{javascript:"addList.js"});
});

// Kapitel 7.2 post neu , jetzt per fetch aufs api (also intern!)
router.post('/addList', [createIdForList, validList], async (req, res) => {
  const response = await fetch('http://localhost:3000/api', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ userId: req.user.id, ...req.body }),
  });

  const result = await response.json();

  res.json(result);
});
// Kapitel 7.1
// router.post('/addList',  validList, async (req, res) => {
// console.log("addList") 
// console.log("req.body.list",req.body.list) 
//   const response = await fetch('http://localhost:3000/api', {
//     headers: { 'Content-Type': 'application/json' },
//     method: 'POST',
//     body: JSON.stringify({ userId: req.user?._id, ...req.body }),
//     // body: JSON.stringify(req.body),
//   });

//   const result = await response.json();
// console.log("result= ", result)
//   res.json(result);
// });



router.get('/uebung', function(req, res, next) {
  
  // ../views/index_uebung_unterricht.ejs
  res.render('index_uebung_unterricht', { title: '<script></script><p style="color:red">Express mit MongoDB</p>' ,words:['EJS', 'is', '<span style="font-weight: bold">awesome</span>']});
});

router.get('/page2', function(req, res, next) {
  
  // ../views/index.ejs
  res.render('page2', { title: '<script></script><p style="color:red">Express mit MongoDB</p>' });
});
 
router.get('/hallo.html', function(req, res, next) {
  res.send(`
    <html>
    <body>
    <h1>hi hallo.html route</h1>
    <img src="./images/welcome.jpg">
    </body>
    </html>
    `);
});

router.get('/impressum', function(req, res, next) {
  res.send(`
    <html>
    <body>
    <h1>Impressum</h1>
    </body>
    </html>
    `);
});


router.get('/uebung_28', function(req, res, next) {
  res.render('uebung_28',
    {words:['EJS', 'is', '<span style="font-weight: bold">awesome</span>'] }
  );
});


router.get('/uebung_29', function(req, res, next) {
  res.render('uebung_29',
    {zahlen:[1,2,3,4,5,6,7,8,9,0] }
  );
});

module.exports = router;
