var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // ../views/index.ejs
  res.render('index' );
});

router.get('/addList', function (req, res, next) {
  res.render('addList');
});


router.get('/uebung', function(req, res, next) {
  
  // ../views/index_uebung_unterricht.ejs
  res.render('index_uebung_unterricht', { title: '<script></script><p style="color:red">Express mit MongoDB</p>' });
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



module.exports = router;
