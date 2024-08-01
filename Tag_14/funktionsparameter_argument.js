// 1 nr ist eine der 1. Parameter der das 1.Argument erwartet
const fkt = (nr = 2) => { // Wertvorgabe im Parameter - default Parameter
    console.log(nr)
}

// 2 Aufruf 
// 2 ist der Wert für den 1.Parameter - Argument
// fkt(2)
fkt(4) // geht das? ja sicher es wandert undefined

// 1  
let zeigenNamen = (...namen)  => { // REST-Parameter verwndelt eine beliebihe Anzahl von Argument zu EINEM Array
    console.log(typeof namen) // object
}
// kleine Parameterliste
// 2
let namen=["Jens","Tim","Anna","Tom"]
zeigenNamen(namen)
zeigenNamen(["Jens","Tim","Anna","Tom","Fritz"])


const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x,index,array) => {
if (index < array.length-1)
    return array[index+1] * 2

})

console.log(map1);
// Expected output: Array [8, 18, 32, 16]
