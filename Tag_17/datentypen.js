let vorname = 'Jens' // Wert geschrieben erzeugt
console.log(typeof vorname) // string
console.log(typeof "Jens") // string

let alter = 42 // Wert geschrieben erzeugt
console.log(typeof alter) // number

let richtig = true // Wert geschrieben erzeugt
console.log(typeof richtig) // boolean

let something = undefined
console.log(typeof something) // undefined

let something2 = null
console.log(typeof something2) // object

///////////////////////////////////////////////////////////////////////

// Array
let spiele = ['Pokemon' , 'Schach']
console.log(typeof spiele) // object

// array teilkonzept vom object

let kunde = ["Jens", "Simon","Tesstr.1, 50668 Köln"] // 0 : Vorname , 1 : Nachname
console.log(kunde[1])

let nameObject = {
    // key : value
    // attributes
    vorname: "Jens",
    nachname : "Simon"
}
console.log(typeof nameObject) // object

console.log(nameObject.nachname)


let kundenDaten ={
    // Sonderregel , man kann key/attribute mit umschliessendenn ''
    'vor name':'Huana',
    nachname :'Marie',
    adresse:'Dragonroad 42, 90411 Puffcity',
}
console.log(kundenDaten)
let produkt = {
   
    titel : 'Klingon Letter Opener',
    preis : 19.99,
    kategorie: 'Office Ware',
    jahr: 2007,
    menge: 5,
}

// buyProduct_Zwischenschritt(
//     kundenDaten.vorname,
//     kundenDaten.nachname,
//     kundenDaten.adresse,
//     produkt["vor name"],
//     produkt.preis,
//     produkt.kategorie,
//     produkt.jahr,
//     produkt.menge
// );

// 1
const buyProduct = (kundenDaten,kunde,produkt) => {

    console.log(kundenDaten['vor name'] + " " + kundenDaten.nachname + " "+kundenDaten.adresse)
    console.log(kunde[0] + " " + kunde[1] + " "+kunde[2])
}
// 2
buyProduct(
    kundenDaten,
    kunde,
    produkt
)

let schachbrett =['T',"S","L"]
let schabrettObject ={
//     turm1:'T',
//     spielFigur:"S",
//     spielFigur:"L"
}

// JSON
// Java
// Script 
// Object
// Notation
const veruecktesObject = {

    variable : {
        var1: ['a','b']
    } 
}

