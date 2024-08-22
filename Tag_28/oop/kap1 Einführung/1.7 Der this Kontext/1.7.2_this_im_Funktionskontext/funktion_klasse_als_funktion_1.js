'use strict'
function Klasse1() {

    return 1;
}

// let rueckgabeWert1 = Klasse1()
// console.log('rueckgabeWert1 --->', rueckgabeWert1);


const Klasse2 = () => 2
// let rueckgabeWert2 = Klasse2()
// console.log('rueckgabeWert2 --->', rueckgabeWert2);

///////////////////////////////////////////////////
let rueckgabeWert1 = new Klasse1()
console.log('rueckgabeWert1 --->', rueckgabeWert1);

let rueckgabeWert2 = new Klasse2()
console.log('rueckgabeWert2 --->', rueckgabeWert2);
