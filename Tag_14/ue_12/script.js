
// Rekusion
/* 
let fkt=() = {
    // ratezahl einlesen
    if () fkt()
        else
    //
}
*/
// Ratespiel
//let zufallsZahl = Math.floor((Math.random() * 10)) +1 //5

const zufallsZahl = () =>  Math.floor((Math.random() * 10)) +1 //5

const rate =(vorgabeZahl) => {

    let ratezahl=Number(prompt("Gib Zahl ein"))
    if (ratezahl !== vorgabeZahl) {
        alert(`Die Zahl ist ${ratezahl < vorgabeZahl ? 'kleiner':'groesser'} als die zu erratende Zahl`)
        rate(vorgabeZahl)
    }
    else
        alert("Du hast die Zahl erraten! GW!")
}

//alert("Die gesuchte Zahl ist: " + zufallsZahl)
rate(zufallsZahl())

