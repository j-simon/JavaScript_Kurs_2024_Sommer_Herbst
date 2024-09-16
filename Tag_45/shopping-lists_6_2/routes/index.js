var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const { validUsername, usernameAvailable, validPassword } = require('../middlewares/index.middleware');
const User = require('../models/user');

/* GET home page. */
router.get('/', async  function(req, res, next) {
  const userData = await (await fetch('http://localhost:3000/api/909090')).json();
  res.render('index', { list: userData.entries });
  // ../views/index.ejs
  
});

router.get('/addList', function (req, res, next) {
  res.render('addList',{javascript:"addList.js"});
});


// kapitel 6.2 user anmeldung/authentifizierung
router.get('/login', function (req, res, next) {
  res.render('auth', { register: false });
});

router.post('/login', [validUsername, validPassword], async function (req, res, next) {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  const correctPassword = await bcrypt.compare(password, user?.password || '');

  if (!correctPassword) {
    res.status(401).json({ error: 'Username or Password is incorrect' });
    return;
  }
  console.log("login user - OK")
  res.redirect('/');
});


router.get('/register', function (req, res, next) {
  res.render('auth', { register: true });
});

router.post('/register', [validUsername, usernameAvailable, validPassword], async function (req, res, next) {
  const { username, password } = req.body;
  const pwHash = await bcrypt.hash(password, 10);
  try {
    await User.create({ username: username, password: pwHash });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'An error occurred while creating the user' });
    return;
  }
  console.log("register user - OK")
  res.redirect('/');
});




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
