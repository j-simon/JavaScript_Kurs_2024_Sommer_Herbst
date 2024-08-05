'use strict'
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








const MAX_NUMBER = 49;
const randomNumberTo = (n) => Math.floor(Math.random() * n);
const allLottoNumbers = range(1, MAX_NUMBER + 1);


// main Funktion
const lottoNumbers = (count, remainingLottoNumbers) =>
    times(count, () => pickRandomLottoNumber(remainingLottoNumbers));


const pickRandomLottoNumber = (remainingLottoNumbers) =>
    remainingLottoNumbers.splice(
        randomNumberTo(remainingLottoNumbers.length),
        1
    )[0];


console.log(lottoNumbers(6, allLottoNumbers));
