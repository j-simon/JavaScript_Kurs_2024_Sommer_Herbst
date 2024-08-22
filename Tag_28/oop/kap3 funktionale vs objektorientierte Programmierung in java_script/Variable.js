let a = 1
let b = a // copy bei primitve Datentypen(number,string,boolean)

b = 2
console.log(a)//=>1

class Zahl {

    constructor(zahl) {
        this.zahl = zahl
    }


}

z1 =new Zahl(10) // object
z2=z1 // keine Kopie
z2.zahl=100
console.log(z1.zahl) // 100

let zahlen=[1,2,3,4]

const verarbeiteArray=(arr)=>{
    arr[0]=999999
    
}
let neuesArray = Object.create(zahlen)
verarbeiteArray(neuesArray) // arr=zahlen
console.log(zahlen)
