'use strict';
function range(start, end) {
    const array = [];
    for (let x = start; x <= end; x++) {
        array.push(x);
    }
    return array;
}

const numbers = range(15, 30);
console.dir(numbers);
