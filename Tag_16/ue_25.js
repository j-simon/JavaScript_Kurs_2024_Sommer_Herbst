'use strict';


const letterThief_fertig = (wort) => {

    let buchstabenArray = wort.split('')
    console.log('buchstabenArray --->', buchstabenArray);

    let neuesArray = buchstabenArray.map(

        (buchstabe, i, arr) => {
            console.log(buchstabe, i, arr, arr.slice(0, i).join(""))
            return arr.slice(0, i).join("")
            // return neuesArray
        }
    )
    return neuesArray.reverse()
}

const letterThief = (wort) => 
    wort.split('').map((buchstabe, i, arr) =>  arr.slice(0, i).join("")).reverse()


console.log(letterThief('dance')); // => ['danc', 'dan', 'da', 'd', '']
