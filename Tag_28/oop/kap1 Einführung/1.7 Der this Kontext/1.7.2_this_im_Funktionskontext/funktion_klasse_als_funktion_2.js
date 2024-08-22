// 'use strict'
function Klasse1() {
    // lokaler this Kontext
    console.log("// lokaler this Kontext",this)
    this.a=10
    this.fkt=()=>{console.log("hallo ich bin eine Funktion in der Funktion")}
    
    // function fkt2(){
    //     console.log("hallo ich bin eine Funktion in der Funktion 2")
    // }

    this.fkt3 = function(){
        console.log("hallo ich bin eine Funktion in der Funktion 3")
    }

    return 1;
}

///////////////////////////////////////////////////
let rueckgabeWert1 = new Klasse1()
console.log('rueckgabeWert1 --->', rueckgabeWert1);

// globaler this Kontext
console.log("// globaler this Kontext",this)
console.log(rueckgabeWert1.a)
rueckgabeWert1.fkt()
// rueckgabeWert1.fkt2()
rueckgabeWert1.fkt3()