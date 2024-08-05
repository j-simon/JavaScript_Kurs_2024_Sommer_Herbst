
'use strict';
const range = (startOrEnd, end, step) =>
    end
        ? rangeFromStartToEnd(startOrEnd, end, step)
        : rangeFromStartToEnd(0, startOrEnd);

const rangeFromStartToEnd = (start, end, step = 1) => {
    const length = Math.max(Math.ceil((end - start) / step), 0);
    const results = Array(length).fill(0);
    results.forEach((x, i, r) => (r[i] = start + i * step));
    return results;
};

const times = (n, fn) => {
    const results = Array(n).fill(0);
    results.forEach((x, i, r) => (r[i] = fn(i)));
    return results;
};

// DON'T REPEAT YOURSELF! 
//console.log(Math.floor(Math.random() * 49) + 1);
/*console.log(Math.floor(Math.random() * 49) + 1);
console.log(Math.floor(Math.random() * 49) + 1);
console.log(Math.floor(Math.random() * 49) + 1);
console.log(Math.floor(Math.random() * 49) + 1);
console.log(Math.floor(Math.random() * 49) + 1);*/

times(6,() => console.log(Math.floor(Math.random() * 49) + 1))


/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray_1(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        // Element tauschen von 2 Werte im Array
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

const MAX_NUMBER = 49;
const arr = range(1, MAX_NUMBER + 1);;
// console.log(shuffleArray_1(arr))
console.log(shuffleArray_1(arr).slice(1,7))

// 2 Variante vom shuffle mit ES6 Systax