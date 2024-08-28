// 1. Funktions-Deklaation mit Codekörper
const tueEtwas = () => console.log("hi")

// 2. Funktionsaufruf
tueEtwas()

tueEtwas.call("kk")

class Test{
    constructor(a){
        this.a=a
    }

    tueEtwas = () => console.log("hi "+this.a)
}

let test =new Test(10)
let test2 =new Test(20)
test.tueEtwas()
test2.tueEtwas.call(test) // 20
test.tueEtwas.call(test2)  // 10
/*
hi
hi
hi 10
hi 20
hi 10
*/

// // 1. Funktions-Deklaation mit Codekörper
// const tueEtwas = () => console.log("hi")

// // 2. Funktionsaufruf
// tueEtwas()

// tueEtwas.call("kk")

// class Test{
//     constructor(a){
//         this.a=a
//     }

//     tueEtwas  (){

//      console.log("hi "+this.a)
//     }
// }

// let test =new Test(10)
// let test2 =new Test(20)
// test.tueEtwas()
// test2.tueEtwas.call(test) // 10
// test.tueEtwas.call(test2) // 20
// /*
// hi
// hi
// hi 10
// hi 10
// hi 20
// */