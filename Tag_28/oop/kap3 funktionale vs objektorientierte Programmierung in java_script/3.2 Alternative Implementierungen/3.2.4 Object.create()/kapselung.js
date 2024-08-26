// 1. Klasse
class Person{
    constructor(vorname){
        this.vorname=vorname
    }

    checkeVorname(vorname){
        if (this.vorname != vorname) return
    }
}

// 2. Objekt ^
const person = new Person("Jens")

person.checkeVorname("Tim")
