var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
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
