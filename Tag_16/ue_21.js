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




// zahlen von 0 bis 97 - range()

// alle zahlen durchgehen und filtern filter()-HigherOrdner

let zahlen = range(2, 98, 1)
// console.log('zahlen --->', zahlen);

let ergebnisArray = zahlen.filter(
    (zahl, i) => {
        // console.log("zu prüfende Zahl:", zahl)
       
        let vorherRange = range(2, i + 2)
        // console.log("range", range(2, i + 2))
        // console.log("raus:", zahl, vorherRange.some((v) => zahl % v == 0))
        let reinraus=  !vorherRange.some((v) => zahl % v == 0)
        return reinraus
    }
)

console.log('ergebnisArray --->', ergebnisArray);
