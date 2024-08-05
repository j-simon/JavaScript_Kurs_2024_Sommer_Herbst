'use strict';

'use strict';

const times = (n, fn) => {
    const results = Array(n).fill(0);
    results.forEach((x, i, r) => (r[i] = fn(i)));
    return results;
};
console.log(times(3, () => 'Arr!').join(" "))
times(3, () => console.log('Ho!'))