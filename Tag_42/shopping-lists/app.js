var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// mongodb
const mongoose = require('mongoose')
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => {
  console.error('Database connection successful')
 // db.collection('importantNotes').insertMany([{vorname:"jens"}]) // funktioniert, ich hatte collection(..) vergesssen
 // die ODM Befehle unterscheiden sich doch ein wenig von den nativen Befehlen im der MongoShell
  
});


var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
//var apiShoppingListRouter = require('./routes/apiShoppingList');
var shoppingListRouter = require('./routes/api/shoppingLists');

console.log("die 'app' wird jetzt (neu)-gestartet!")


var app = express();
app.set('vorname', "Jens");
app.locals.root = __dirname;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routing ausliefern von statischen .html .css .jpg ,,
app.use(express.static(path.join(__dirname, 'webseiten')));


// app.use((req, res, next) => {
//   console.log('Request Headers:', req.headers);
//   next(); // Pass control to the next middleware/route handler
// });

// meine middleware use()
// req: request Anfrage
// app.use((req, res, next)=> {
//   console.log("req.originalUrl",req.originalUrl)
//   console.log("req.hostname",req.hostname)
//   //next(createError(404));
// })

// uebung_06
// http://localhost:3000/top-secret
app.use('/top-secret', () => console.log('Someone entered the secret route!'))

// uebung_07
// http://localhost:3000/top-secret-ue7
app.use('/top-secret-ue7', function (req, res, next) {
  console.log(`Someone entered the secret route: ${req.originalUrl}`)
  next()
})


// uebung_08
// http://localhost:3000/top-secret-ue8
app.use('/top-secret-ue8', (request, response) => {
  console.log(`Someone entered the secret route: ${request.originalUrl}`);
  response.status(403).send('This area is top secret!');
});

// uebung_09
// http://localhost:3000/top-secret-ue9
app.use('/top-secret-ue9', (req, res, next) => {
  console.log(`Someone entered the secret route uebung_09 : ${req.originalUrl}`);
  next();
});

app.use('/top-secret-ue9', (req, res, next) => {
  res.status(403).send('This area is top secret! uebung_09');
  return; // kann weg, da kommt ja nichts mehr danach!




});



// uebung_10
// match für get/post/put .. alle methods
app.use('/get-route/:age', (req, res, next) => {
  if (req.params.age < 18) {
    res.status(403).send('Sorry, you have to be at least 18 years old to continue.');
    return; // kann nicht weg, weil sonst 2 x geantwortet wird , das darf man nicht!
  } 
  
  next();
});
// match get
app.get('/get-route/:age', (req, res, next) => {
  res.send('Adult zone!');


});


// uebung_11
// match für get/post/put .. alle methods
app.use("/login-route", (req, res, next) => {
  if (req.body.username && req.body.password) {
    console.log('username: ' + req.body.username);
    console.log('password: ' + req.body.password);
    next(); // -> zu nächsten middleware
     return;
  }
  res.status(422).send('cannot process data');
  return;
});

// match post
app.post('/login-route', (req, res) => {
  res.send('login successful');
});



// http://localhost:3000/test_methode
// app.use('/test_methode', (req, res) => {
//   console.log(req.originalUrl); // 1. url 
//   console.log(req.method) // 2. methode
//   //response.status(403).send('This area is top secret!');
// });




//////////////////////////////////////
// externe Route Dateien
app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/test_methode', apiShoppingListRouter);
// uebung_12
const apiRouter = require('./routes/api/shoppingLists');
app.use('/api', apiRouter);

////////////////////////////////////////

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// url

// http://
// localhost:3000
// /?vorname=jens&nachname=simon