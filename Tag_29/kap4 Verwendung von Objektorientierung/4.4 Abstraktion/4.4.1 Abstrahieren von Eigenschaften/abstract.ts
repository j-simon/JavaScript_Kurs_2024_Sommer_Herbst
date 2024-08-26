abstract class Mensch {
    // Eigenschaften
    name: string;
    age: number;
  
    // Konstruktor
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Abstrakte Methode
    abstract speak(): void;
  
    // Normale Methode
    introduce(): void {
      console.log(`Hi, ich bin ${this.name} und ich bin ${this.age} Jahre alt.`);
    }
  }
  
  // Unterklasse
  class Erwachsener extends Mensch {
    // Implementierung der abstrakten Methode
    speak(): void {
      console.log("Ich kann wie ein Erwachsener sprechen.");
    }
  }
  
  // Verwendung der Oberklasse
  //const mensch = new Mensch("John", 30);

  // Verwendung der Unterklasse
  const john = new Erwachsener("John", 30);
  john.introduce(); // Ausgabe: Hi, ich bin John und ich bin 30 Jahre alt.
  john.speak();     // Ausgabe: Ich kann wie ein Erwachsener sprechen.
  