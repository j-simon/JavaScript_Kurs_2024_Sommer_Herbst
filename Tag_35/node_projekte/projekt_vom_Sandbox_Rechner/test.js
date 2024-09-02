console.log("Hallo Welt 3")

const fs = require('fs');  // standardbiliothek
fs.readFile("website_inhalt.txt",
 'utf8',
    (err, data) => {
        if (err) throw err;
        console.log(data,typeof data);
        app.get('/', function (req, res) {
            res.send(data)
          })
          app.get('/page2', function (req, res) {
            res.send(data+ " Seite 2")
          })


        
          
    });


const express = require('express')
const app = express()


app.listen(3000)
console.log("Im Browser http://localhost:3000 eingeben")