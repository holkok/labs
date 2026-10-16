'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word', 42, null, undefined, { a: 1 }, [1, 2]];

const hash = {};

for (const item of array) {
  const type = typeof item;
  if (!(type in hash)) {
    hash[type] = 0;
  }
  hash[type]++;
}

console.dir(hash);