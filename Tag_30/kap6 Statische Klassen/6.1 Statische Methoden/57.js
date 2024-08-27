class MathHelper {
    static squareVolume(length) {
        return length ** 3;
    }
}

// die Klasse habe ich aus dem vorherigen Codschnippsel übernommen,

const mathHelper = new MathHelper()

// das Objekt instanziert sich aus der Klasse,
// das habe ich aus dem Screenshot abgetippt!

// sonst geht das ja gar nicht ;-)

console.log(mathHelper.__proto__.constructor.squareVolume(3)); // 27