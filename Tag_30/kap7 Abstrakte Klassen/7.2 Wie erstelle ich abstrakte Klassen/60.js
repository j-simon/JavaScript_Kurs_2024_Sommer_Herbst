// abstract class Level {....}
// gibt es in JavaScript und auch Python NICHT, 
// PHP, JAVA und TypeScript unterstützen dies.

class Level {
    constructor(name, points) {
      // Man darf den Konstruktor nicht komplett blockieren, wie in 6.1 von_mir.js
      // folgende Klassen sind ja nich abstrakt und müssn durch den Basisklassen-Konstruktor durch
      if (new.target === Level) {
        throw new TypeError('Level is an abstract class and cannot be instantiated');
      }
      this.name = name;
      this.points = points;
    }
  }
  
  class OccasionalBuyer extends Level {
    constructor(name, points) {
      super(name, points);
      this.boni = ['3% discount', 'buy 5, pay 4'];
    }
  }
  
  class IntermediateBuyer extends Level {
    constructor(name, points) {
      super(name, points);
      this.boni = ['5% discount', 'buy 5, pay 4', 'free delivery'];
    }
  }
  
  class LoyaltyKing extends Level {
    constructor(name, points) {
      super(name, points);
      this.boni = ['7% discount', 'buy 5, pay 3', 'free delivery', 'birthday gift'];
    }
  }
  
  const level = new Level('level 1', 0); // execption
  // const loyaltyKing = new LoyaltyKing('Loyalty King', 1000); // no exception