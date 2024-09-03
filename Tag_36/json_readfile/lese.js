const fs = require('fs');

fs.readFile('daten.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    
    const person = JSON.parse(data)
    // console.log(person.vorname)
    console.log(person)
});