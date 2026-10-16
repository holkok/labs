'use strict';

const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};

const result = [];
for (const [key, func] of Object.entries(iface)) {
    result.push([key, func.length]);
}

console.log(JSON.stringify(result));
console.log(result);
