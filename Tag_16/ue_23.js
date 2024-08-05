'use strict';

const randomNumberTo = (n) => Math.floor(Math.random() * n);

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
const NUMBER_OF_PLAYS = 10000;
const MY_GUESS = [2, 12, 19, 21, 42, 43];

const lottoStats = () =>
    range(NUMBER_OF_PLAYS)
        .map(() => numberOfHits(play(), MY_GUESS))
        .reduce(
            (stats, numHits) => {
                stats[numHits] += 1
                return stats
            },
            [0, 0, 0, 0, 0, 0],
        );

const numberOfHits = (draw, guess) => intersection(draw, guess).length;

const intersection = (a, b) => a.filter(v => b.includes(v));

const play = () => lottoNumbers(6, allLottoNumbers());
const allLottoNumbers = () => range(1, MAX_NUMBER + 1);

const lottoNumbers = (count, remainingLottoNumbers) =>
    times(count, () => pickRandomLottoNumber(remainingLottoNumbers));

const pickRandomLottoNumber = (remainingLottoNumbers) =>
    remainingLottoNumbers.splice(
        randomNumberTo(remainingLottoNumbers.length),
        1,
    )[0];


console.log("0 Treffer,  1 Treffer, 2 Treffer , 3 Teffer, 4 Treffer, 5 Treffer, 6 Treffer")
console.log(lottoStats());

/*Gezogen: [1,2,3,4,5,6]
Gespielt_Beisp1 :[32,22,34,44,45,]  => 0 Treffer
Gespielt_Beisp1 :[1,22,34,44,45,22]   => 1 Treffer


Gespielt_Beisp1 :[1,2,34,44,45,22]    => 2 Treffer
[0,1,1,0,0,0]
*/
console.log([1,2,3,4,5,6].filter(num => [1,2,34,44,46,22].includes(num)).length)
console.log([1,2,3,4,5,6].filter(num => [1,22,34,44,45,22].includes(num)).length)