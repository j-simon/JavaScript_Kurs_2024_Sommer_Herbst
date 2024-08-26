class Rechteck {

    constructor(a, b) {
        this.a = a
        this.b = b
        // this.flaeche = this.a*this.b
    }

    // virtuelles Attribute / vorgegaukeltes Attribut
    getFlaeche = () => {
        return this.a * this.b
        // return this.flaeche //this.a*this.b
    }
}

let re1 = new Rechteck(4, 6)
console.log(re1.getFlaeche())