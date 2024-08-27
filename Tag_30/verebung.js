'use strict'
// ElternKlasse / Oberklasse / Superclass
class Tier {
    // Attribute / Zustand eines Objektes / state
    #vorname // # private

    // Methode / Verhalten / behavior
     constructor(vorname){
        this.#vorname=vorname // Wertsetzung in den Zustand des späterern Objektes
        
    }

    getVorname(){
        // if()
        return this.#vorname
    }

    setVorname(vorname){
        if(vorname !=="Schnecke" )
            this.#vorname=vorname
        else 
            this.#vorname="bitte noch mal den Namen prüfen"
    }

    macheEinenTon(){

        console.log("Ton")
    }
}

// Kindklasse / Unterklasse / Subclass
class Hund extends Tier {
    #alter
     constructor(vorname, alter){
         super(vorname)
         this.#alter=alter
     }

    getAlter(){
        // if()
        return this.#alter
    }

    setAlter(alter){
        // if()
        this.#alter=alter
    }

    setVorname(vorname){
        console.log("Hallo, du versuchst den Hund umzubennen, willst Du das?")
        if(vorname !=="Wuffi" )
            this.setVorname(vorname)
        else 
            console.log("bitte noch mal den Namen prüfen")
    }

    // überschreiben 
    macheEinenTon(){
        console.log("Wuff!")
    }
}

//////////////////////////////////////////////

let meinTier = new Tier("Ameise") // Funktionsaufruf - Konstruktionsfunktionsaufruf -constructor
console.log(meinTier)
console.log(meinTier.getVorname())
meinTier.setVorname("Schnecke")
console.log(meinTier.getVorname())
console.log(meinTier)
meinTier.macheEinenTon()

let meinHund = new Hund("Wuffi",5)
console.log('meinHund --->', meinHund);
console.log(meinHund.getVorname())
meinHund.setVorname("Schnecke")
console.log(meinHund.getVorname())
console.log(meinHund.getAlter())
meinHund.macheEinenTon()


let meinTier2 ={vorname:"jens",altler:42}

// console.log(meinTier2)
// let vorname ="Jens"


// const einFunktion = (vorname) =>{
//     console.log(vorname)
//     let vorname=vorname // lokale Variable wird die Parametervariable vorname
// }
// einFunktion("Schnecke")
// einFunktion("Ameise")