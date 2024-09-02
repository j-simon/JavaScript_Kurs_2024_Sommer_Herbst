require("./test_1")
console.log("hallo test_2")



const fs = require('fs');
fs.readFile("daten.txt",
 'utf8',
    (err, data) => {
        if (err) throw err;
        console.log(data,typeof data);
    });
