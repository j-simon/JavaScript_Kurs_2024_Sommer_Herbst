{
    console.log("1. funktional mit globalen Variablen")
    // 1. funktional mit globalen Variablen
    let vorname
    let nachname

    function erzeugePerson(v_name, n_name) {
        vorname = v_name
        nachname = n_name
    }

    function wieHeisstDu() {
        console.log("Ich heise " + vorname + " " + nachname)
    }

    let person1 = erzeugePerson("Jens", "Simon");
    wieHeisstDu()

}
// Eine 2. Person kann nicht erzeugt und angeziegt werden, 
// ohne das die 1.Person verschwindet

{
    console.log("\n2. ES6 mit class und new")
    //////////////////////////////////////////////////////////////////////
    // 2. ES6 mit class und new
    class Person {
        
        constructor(vorname="", nachname="") {
            this.vorname = vorname
            this.nachname = nachname
        }

        wieHeisstDu() {
            console.log("Ich heise " + this.vorname + " " + this.nachname)
        }
    }

    let person1 = new Person("Jens", "Simon");
    let person2 = new Person("Tim", "Schmitz");
    person1.wieHeisstDu() // => Ich heise Jens Simon
    person2.wieHeisstDu() // => Ich heise Tim Schmitz

    let person3 = new Person();
    //person3.nachname="Simon"
    person3.wieHeisstDu() // => Ich heise 
}

{
    console.log("\n3. Funktion Schreibweise mit prototype Eerweiterung im JavaScript Hintergrund")
    //////////////////////////////////////////////////////////////////////
    // 3. Funktion Schreibweise mit prototype Eerweiterung im JavaScript Hintergrund
    function Person(vorname, nachname) {
        this.vorname = vorname
        this.nachname = nachname
        
    }

    // eigentlich wird ab hier die Funktion Person() um eine
    // neue innere Funktion wieHeisstDu() erweitert
    Person.prototype.wieHeisstDu = function () {
        console.log("Ich heise " + this.vorname + " " + this.nachname)
    }

    let person1 = new Person("Jens", "Simon");
    let person2 = new Person("Tim", "Schmitz");
    person1.wieHeisstDu()
    person2.wieHeisstDu()
    // Vorsicht man kann Methode auch nachträglich wieder löschen
    // delete Person.prototype.wieHeisstDu 
    // person2.wieHeisstDu()

    
   
}
{
    console.log("\n4. Funktion Schreibweise OHNE prototype Eerweiterung im JavaScript Hintergrund")
    //////////////////////////////////////////////////////////////////////
    // 4. Funktion Schreibweise OHNE prototype Erweiterung im JavaScript Hintergrund
    function Person(vorname, nachname) {
        this.vorname = vorname
        this.nachname = nachname
        this.wieHeisstDu = function () {
            console.log("Ich heise " + this.vorname + " " + this.nachname)
        }
    }

    let person1 = new Person("Jens", "Simon");
    let person2 = new Person("Tim", "Schmitz");
    console.log("person2",person2)
    person1.wieHeisstDu()
    person2.wieHeisstDu()

    // person3 = person2 // verboten

    // 1. Objekt kopieren
    let person3 = Object.create(person2)
    console.log("person3 vorname",person3.vorname)
    console.log("person3 nachname",person3.nachname)
    // 2. constructor
    let person4 = new person1.constructor("Vorname","Nachname")
    console.log("person4",person4)

    

   
}