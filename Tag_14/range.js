'use strict'

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

 let result=range(20 , -10, -2.5)       
 console.log(result)