const fs = require('fs');

fs.readFile('daten_mehrere.json', 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
    
    const person = JSON.parse(data)
    //const person = data
    
    console.log(person,typeof person)
    // console.log(person.vorname)

    // let user ={}
    // user.vorname="Jens"
    // user.nachname="Simon"
    // console.log(user,typeof user)
    // console.log(JSON.stringify(user))
});