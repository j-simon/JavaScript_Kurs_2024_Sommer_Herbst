'use strict'




async function holeDaten() {
  
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    
    let txtDaten = await response.text();//.json();

    // console.log(typeof txtDaten);
    // console.log(txtDaten);

    const userObject = JSON.parse(txtDaten)
    // console.log(typeof userObject)
     console.log(userObject)

    // let username = userObject.username
    // console.log('username --->', username);
    

  
}

holeDaten();

