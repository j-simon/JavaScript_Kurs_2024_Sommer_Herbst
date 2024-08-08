'use strict'

let a = [1,2,3,4]
let aSinnlos = ['Jens','Simon']

console.log('a --->', a);
console.log('a --->', typeof a);

let o = {
    vorname : "Jens",
    nachname : "Simon"

}
let oSinnlos ={
    zahl1 :1,
    zhal2 :2,
    zahl3 :3,
    zahl4 :4
}
console.log('o --->', o);
console.log('o --->', typeof o);


// a
// Langform 
// let vornameA = aSinnlos[0]
// let nachnameA = aSinnlos[1]
// Kurzform
let [vornameA,nachnameA] = aSinnlos

console.log(`${vornameA} - ${nachnameA}`)

// o
// einzelinhalte isolieren / destructurieren
 let test = o.vorname
 let test2 = o.nachname
 console.log(`${test} - ${test2}`)
let {vorname,nachname} = o
console.log(`${vorname} - ${nachname}`)



const productsFromCSV = (csv) => {
   return csv.split('\n').slice(1).map((str) => str.trim())
//  return  csv.split('\n').slice(1).map((str) => str.trim());
}
const productsCSV = `name, category, price
  Klingon Letter Opener, Office Warfare, 19.99
  Backpack of Holding, Travel, 29.99
  Tardis Alarmclock, Merchandise, 15.99`;

const products = productsFromCSV(productsCSV);
console.log(products);



// 'Klingon Letter Opener, Office Warfare, 19.99'
const productFromCSV = (productString) => {
    const productArray = productString.split(', ');
    ['Klingon Letter Opener', 'Office Warfare', 19.99]

    //productArray[3]="hallo"
    console.log('productArray --->', productArray);
    
    // destrukturierung anwenden
    // const name = productArray[0];
    // const category = productArray[1];
    // const price = productArray[2];
//    let [name, category, price,bemerkungstext] = productArray
    let [name, ...dieAnderen ] = productArray
console.log(name)
console.log(dieAnderen)
    // return {
    //     'name': name,
    //     'category': category,
    //     'price': price,
    // };
    return {        name,         category,         price,    };
};
console.log(productFromCSV('Klingon Letter Opener, Office Warfare, 19.99'))

const productFromArray = ([name, category, price]) => {
    return {
        name,
        category,
        price,
    };
};
console.log(productFromArray(['aaaKlingon Letter Opener', 'Office Warfare', 19.99]))


const productFromObject = ({name, category, price=0}) => {
    return [
        name,
        category, 
        price
    ]
};
console.log(productFromObject({name :'aaaKlingon Letter Opener', category:'Office Warfare'}))