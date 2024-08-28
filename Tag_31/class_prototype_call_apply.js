function Tier(name) {

    this.name = name
}


let tier = new Tier("Tier")
console.log('tier --->', tier);

class Hund extends Tier {
    constructor(name,alter) {
        super(name)
        this.alter = alter
    }
}

let hund = new Hund("Hund", 12)
console.log('hund --->', hund);

function Katze(name,spielzeug){
    // falsch!

    // this.name = name
    // super(name)
    // Tier(name)

    // richtig!
    Tier.apply(this,[name])
    // Tier.call(this,name)

    // Das Attribut ist neu
    this.spielzeug = spielzeug
}

let katze = new Katze("Mieze","Maus")
console.log('katze --->', katze);
