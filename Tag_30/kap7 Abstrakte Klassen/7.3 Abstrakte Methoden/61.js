class Level {
    constructor(name, points) {

        // Zur Hilfe eingefügt, wer ist eigentlich der Kontext unter dem this auftaucht??
        console.log("Wer ist der this-Konzext?", this)
        
        console.log("Wer ist new.target  ?", new.target)
        if (new.target === Level) {
            throw new TypeError('Level is an abstract class and cannot be instantiated');
        }

        if (this.addPoints === undefined || typeof this.addPoints !== 'function') {
            throw new TypeError('Abstract method addPoints must be declared');
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
    // addPoints =()=> {
    //   this.points += 10;
    // }
    addPoints() {
        this.points += 10;
    }
}

const occasionalBuyer = new OccasionalBuyer('Occasional Buyer', 250); // exception

const intermediateBuyer = new IntermediateBuyer('Intermediate Buyer', 600); // exception

const loyaltyKing = new LoyaltyKing('Loyalty King', 1000); // no exception
