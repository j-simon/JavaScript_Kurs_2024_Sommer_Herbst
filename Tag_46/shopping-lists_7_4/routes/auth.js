// Neu in Kapitel 6.3
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const { validUsername, usernameAvailable, validPassword } = require('../middlewares/index.middleware');
const User = require('../models/user');


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

    createAndSetToken(res, { username: user.username });

    
    console.log("login user - OK")
    res.redirect('/');
});


router.get('/register', function (req, res, next) {
    res.render('auth', { register: true });
});

router.post('/register', [validUsername,  validPassword], async function (req, res, next) {
    const { username, password } = req.body;
    const pwHash = await bcrypt.hash(password, 10);
    let user
    try {
        user = await User.create({ username: username, password: pwHash });
    } catch (error) {
        console.log("error: ",error);
        res.status(400).json({ error: 'An error occurred while creating the user' });
        return;
    }

    createAndSetToken(res, { username: user.username });

    console.log("register user - OK")

    res.redirect('/');
});

router.get('/logout', function (req, res, next) {
    console.log("logout")
        //  res.json({ message: 'Logout successfull' });
    res.clearCookie('bearer').json({ message: 'Logout successfull' });
    // res.clearCookie('bearer').redirect('/')
     
  });

  
function createAndSetToken(res, data) {
    const token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });
  
    res.cookie('bearer', token, { httpOnly: true });

    // const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    //     expiresIn: 3600,
    //     // expiresIn: '1h',
    //     // expiresIn: '1d',
    // });

    // res.cookie('bearer', token, { httpOnly: true });


  }

module.exports = router;
