// 'use strict';

// const triangle = ({ height = 5, character = '*' } = { height: 5, character: '$' }) => buildTriangle(height, 1, character);

// const buildTriangle = (height, topLineWidth, character) =>
//     topLineWidth > height
//         ? ''
//         : `${line(topLineWidth, character)}\n${buildTriangle(
//             height,
//             topLineWidth + 1,
//             character,
//         )}`;

// const line = (length, character) =>
//     length === 0 ? '' : character + line(length - 1, character);

// //console.log(triangle(6));
// console.log(triangle({ height: 6 }));
// console.log(triangle(
//     {
//         height: 6,
//         character: '#'
//     }));
// console.log(triangle({}));
// console.log(triangle());

'use strict';

const triangle = ({ height = 5, topLineWidth = 1, character = '*' } = { height: 5, topLineWidth: 1, character: '$' }) =>


    topLineWidth > height
        ? ''
        : `${line(topLineWidth, character)}\n${triangle({
            height, // reduktion
            topLineWidth: topLineWidth + 1, // nicht anders möglich
            character: character
        }, // nicht reduziert , Langform
        )}`;


//const buildTriangle = (height, topLineWidth, character) =>


const line = (length, character) =>
    length === 0 ? '' : character + line(length - 1, character);

//console.log(triangle(6));
console.log(triangle({ height: 6, topLineWidth: 4 }));
console.log(triangle({ height: 6 }));
console.log(triangle(
    {
        height: 6,
        character: '#'
    }));
console.log(triangle({}));
console.log(triangle());