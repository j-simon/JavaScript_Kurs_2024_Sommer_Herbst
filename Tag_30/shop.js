class Product {

    preis
    name
    constructor(preis, name) {
        if (new.target === Product) throw new TypeError('Product is an abstract class and cannot be instantiated');
        
        this.preis = preis
        this.name = name
    }
}

class Kleidung extends Product {

    groesse
    farbe
    constructor(preis, name, groesse, farbe) {
        super(preis, name)
        this.groesse = groesse
        this.farbe = farbe
    }
}

class Waschmaschine extends Product {
    verbrauchwasser
    energielabel
    constructor(preis, name, verbrauchwasser, energielabel) {
        super(preis, name)
        this.verbrauchwasser = verbrauchwasser
        this.energielabel = energielabel
    }
}

// let product = new Product("Test", 0)
let hose = new Kleidung(99.9, "Super Hose", 12, "blau")
let waschmaschine = new Waschmaschine(234.56, "Top Waschmaschine", 4.5, "A+++")