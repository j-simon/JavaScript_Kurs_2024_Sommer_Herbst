class MathHelper {
    constructor() {
        throw new Error(
            `      ********************************************\n
             ********************************************\n
             du sollst diese Klasse nur statisch nutzen!\n
             kein Objekt soll mit new erzeugt werden!\n
             ********************************************\n
             ********************************************`
        )
    }
    static squareVolume(length) {
        return length ** 3;
    }
}


// damit das nicht geht, weil es sinnlos ist, kann man einen Konstruktor einführen, der 
// einen Programmabbruch erzeugt und eine Error Message ausgibt!

const mathHelper = new MathHelper()
