// ES6
// class Tier {

// }

// let tier = new Tier()

function Tier(name) {
    console.log(this)
    // console.log("Tier()",name)
    this.name = name
    console.log(this)
    // console.log(this)
}

// ES6
// class Katze extends Tier{
//     constructor(name,alter){
//         super(name)
//         this.alter=alter
//     }
// }
function Katze(name,alter) {
    //     constructor(name,alter){
    //         super(name)
    //         this.alter=alter
    //     }
    // Tier(name) // this kann so nicht verändert
    console.log(this)
    // Tier.call(this, name)
    console.log(this)
    Tier.apply(this,[ name])
    this.alter=alter
    
    console.log(this)
 }

let tier = new Tier("Hasi") // Konstruktor
// console.log('tier --->', tier);

let tier2 = Tier("Hasi") // undefined
// console.log('tier2 --->', tier2);

let katzi = new Katze("Katzi",5) // Konstruktor
// console.log('katzi --->', katzi);

