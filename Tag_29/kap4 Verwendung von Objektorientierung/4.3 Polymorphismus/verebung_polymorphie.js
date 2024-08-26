class Tier { // Parent

    gibEinenTonVonDir(){
        console.log("Ich bin das Tier")

    }
}

class Mensch extends Tier{ // Child
    gibEinenTonVonDir(){
        console.log("Ich bin der Mensch")

    }
}

class Hund extends Tier{ // Child
    gibEinenTonVonDir(){
        console.log("Ich bin der Hund")

    }
}

class Katze  extends Tier { // Child
    gibEinenTonVonDir(){
        console.log("Ich bin die Katze")

    }
}

class Test {}

// Objekt-Welt

let tier = new Tier()
tier.gibEinenTonVonDir()
console.log('tier --->', tier);

let jens = new Mensch()
console.log('jens --->', jens);
jens.gibEinenTonVonDir()

let hund = new Hund()
hund.gibEinenTonVonDir()

let katze = new Katze()
katze.gibEinenTonVonDir()
// Massenverarbeitung verschiedener Objekte verschiedener Klassen
// die aber alle verwandt sind!
let lebewesen = [tier,katze,katze,hund ,hund,jens]

// Polymorphie, alle Objekte rufen ihre zugrordnete Methode auf!
lebewesen.forEach((lebewesen)=>{lebewesen.gibEinenTonVonDir()})

// test gehört nicht in das Verwandtschaftsverhältnis
console.log("")

let test = new Test()

lebewesen = [tier,katze,test,katze,hund ,hund,jens]
// ab dem test-Objekt tritt eine Fehler auf!
lebewesen.forEach((lebewesen)=>{lebewesen.gibEinenTonVonDir()})



