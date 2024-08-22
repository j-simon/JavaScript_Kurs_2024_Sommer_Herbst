'use strict'
// wenn man Klassenamen nicht mit einem Grossbuchstaben beginnt,
// ist das technisch zwar möglich, aber es führt zur Verwechslung von 
// Variablen und Klassen 

class Lamp { // der Klassenname ist "Lamp" Pascal-Case Schreibweise
  
  // Alle Attribute entstehen ohne let oder const bei Erstbenuzung(Wertzuweisung)
  // Alle Methoden werden ohne => oder function Keyword definiert
  // Besondere fixe Konstruktor-Methode für Wertübergabe
  

  toggleActive() {
    this.lightOn = !this.lightOn;
  }

  logLightStatus() {
    console.log(this.lightOn);
  }

  constructor(status) {
    console.log("lokaler this-Kontext :",this)
    this.lightOn = status;
    
    console.log("lokaler this-Kontext :",this)
  }
}

// Instanzierung eines Objektes von/aus einer Klasse(Bauplan)
 const lamp = new Lamp(false); // new als Schlüsselwort

// lamp.logLightStatus(); // false
// lamp.toggleActive();
// lamp.logLightStatus(); // true

// // Instanzierung eiens Objekt von einer Klasse
// const lamp2 = new Lamp(true);
// lamp2.logLightStatus(); // true
// lamp2.toggleActive();
// lamp2.logLightStatus(); // false

//
// mehrere Lampen sind nun einfach hinzufügbar
// const lamp2 = new Lamp(false);
// const lamp3 = new Lamp(true);
// const lamp4 = new Lamp(false);

// // und nun alle in ein Array packen und mit foreach den jeweiligen Status auslesen
// console.log("Stati aller Lampen anzeigen")
// const lampen =[ lamp,lamp2,lamp3,lamp4]
// lampen.forEach((lampe,i) => {
//   console.log("Status für Lampe: "+(i+1))
//   lampe.logLightStatus()
// })



