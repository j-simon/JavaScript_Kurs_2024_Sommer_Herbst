class Level {
    constructor(name, points) {
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