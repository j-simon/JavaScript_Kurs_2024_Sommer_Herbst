class GeometrieBibliothek {
    constructor(){
        if (new.target===GeometrieBibliothek)
            throw new TypeError("die ist eine statisch nutzbare Klasse.")
    }
    static PIE = 3.14 // 
    static berechneKreisflaeche = (radius)  => Math.PI * radius ** 2
    berechneKreisflaeche2 = (radius)  => Math.PI * radius ** 2
    static berechneVolume = () =>{}
}

// let geo = new GeometrieBibliothek() // negativ Nutzung
GeometrieBibliothek.PIE=7
console.log('GeometrieBibliothek.PIE --->', GeometrieBibliothek.PIE);

console.log(GeometrieBibliothek.berechneKreisflaeche(4)*GeometrieBibliothek.PIE)
GeometrieBibliothek.berechneKreisflaeche()
let geo = new GeometrieBibliothek()
geo.berechneKreisflaeche2()

