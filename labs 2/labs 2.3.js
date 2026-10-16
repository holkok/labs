function rangeOdd(start, end) {
    const array = [];
    for (let x = start; x <= end; x++) {
        if (x % 2 !== 0) {
            array.push(x);
        }
    }
    return array;
}

const oddNums = rangeOdd(15, 30);
console.dir(oddNums);
