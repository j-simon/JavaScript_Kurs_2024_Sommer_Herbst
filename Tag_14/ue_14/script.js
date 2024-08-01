
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

const rate =(vorgabeZahl=zufallsZahl() ,runde = 1 ) => {
    
    let ratezahl=Number(prompt(`Gib Zahl ein, die bist in der ${runde}.ten Runde`))
    if (ratezahl !== vorgabeZahl) {
        alert(`Die Zahl ist ${ratezahl < vorgabeZahl ? 'kleiner':'groesser'} als die zu erratende Zahl`)
        rate(vorgabeZahl, runde + 1)
    }
    else
        alert("Du hast die Zahl erraten! GW!")
}


//alert("Die gesuchte Zahl ist: " + zufallsZahl)

// rate(zufallsZahl(),10)
rate(zufallsZahl(),1)
rate(zufallsZahl())
rate()
