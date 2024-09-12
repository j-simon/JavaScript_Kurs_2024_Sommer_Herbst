var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.jade', { title: 'Express' });
});

router.get('/page_ejs', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});


router.get('/page_jade', function(req, res, next) {
  res.render('index.jade', { title: 'Express' });
});

module.exports = router;
