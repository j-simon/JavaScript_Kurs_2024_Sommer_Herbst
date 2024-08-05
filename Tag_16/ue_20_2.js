
'use strict';
const times = (n, fn) => {
    const results = Array(n).fill(0);
    results.forEach((x, i, r) => (r[i] = fn(i)));
    return results;
};


const rangeFromStartToEnd = (start, end, step = 1) => {
    const length = Math.max(Math.ceil((end - start) / step), 0);
    const results = Array(length).fill(0);
    results.forEach((x, i, r) => (r[i] = start + i * step));
    return results;
};

const range = (startOrEnd, end, step) =>
    end
        ? rangeFromStartToEnd(startOrEnd, end, step)
        : rangeFromStartToEnd(0, startOrEnd);

let arr = range(1, 50, 1);
console.log('arr --->', arr);

let lottozahlen = []

let maxZahlen=49
// DON'T REPEAT YOURSELF
let zieheZahl = () => {
let zufallszahl = Math.floor(Math.random() * maxZahlen)//+ 1 // 0..48
maxZahlen-=1
// console.log('zufallszahl + 1 --->', zufallszahl + 1);
        
// womit kann man ein belieges Element aus dem Array entnehmen
// splice
let zahl = arr.splice(zufallszahl,1).join()
lottozahlen.push(zahl)
// console.log('arr --->', arr);
// console.log('arr.length --->', arr.length);
}
// zufallszahl = Math.floor(Math.random() * 49)//+ 1 // 0..48
// console.log('zufallszahl --->', zufallszahl);

// // womit kann man ein belieges Element aus dem Array entnehmen
// // splice
// arr.splice(zufallszahl,1)
// console.log('arr --->', arr);
// console.log('arr.length --->', arr.length)
times (6 , ()=> zieheZahl())

console.log(lottozahlen)