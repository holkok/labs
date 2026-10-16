'use strict';

const data = [true, 'hello', false, 'farm', 5, false, 'word', 10, '80', true, 'JavaScript', 20, 90];

const result = {};

for (const element of data) {
  const type = typeof element;

  if (!result[type]) {
    result[type] = 0;
  }

  result[type]++;
}

console.log(result);