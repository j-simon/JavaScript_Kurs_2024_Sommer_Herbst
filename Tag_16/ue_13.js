'use strict';



// Lösung mit for-loop
const triangle_1 = (height) => {
    let result = '' // leerer Text
    for (let i = 1; i <= height; i++) {
        console.log("i=",i)
        result += line(i, '*') + '\n'
    }
    return result; 
};

// Lösung Rekursion - sehr kurz
const triangle_2 = (height, topLineWidth = 1) => {
    if (topLineWidth > height) return '';
    return line(topLineWidth,"*") + '\n' + triangle_2(height, topLineWidth + 1);
};

//  Musterlösung
//  /* your code here */ 
const triangle = (height) => buildTriangle(height, 1, '*');

const buildTriangle = (height, topLineWidth, character) =>
    topLineWidth > height
        ? ''
        : `${line(topLineWidth, character)}\n${buildTriangle(
              height,
              topLineWidth + 1,
              character,
          )}`;

         
const line = (length, character) =>
    length === 0 ? '' : character + line(length - 1, character);


console.log(triangle_1(7)); // for loop
console.log(triangle_2(7)); // rekursion kurz
console.log(triangle(5)); // musterlösung