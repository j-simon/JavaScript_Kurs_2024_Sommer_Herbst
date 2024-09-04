var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

console.log("die 'app' wird jetzt (neu)-gestartet!")

 
var app = express();
app.set('vorname', "Jens");
   

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

 

// meine middleware use()
// req: request Anfrage
app.use((req, res, next)=> {
  console.log("req.originalUrl",req.originalUrl)
  console.log("req.hostname",req.hostname)
  //next(createError(404));
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
