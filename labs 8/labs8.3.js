'use strict';

const contract = (fn, ...types) => {
  const expectedArgs = types.slice(0, -1);
  const expectedReturn = types[types.length - 1];

  return (...args) => {
    for (let i = 0; i < expectedArgs.length; i++) {
      const typeName = expectedArgs[i].name.toLowerCase();
      if (typeof args[i] !== typeName) {
        throw new TypeError(`Invalid type for argument ${i}, expected ${expectedArgs[i].name}`);
      }
    }

    const output = fn(...args);
    const returnTypeName = expectedReturn.name.toLowerCase();
    if (typeof output !== returnTypeName) {
      throw new TypeError(`Invalid return type, expected ${expectedReturn.name}`);
    }

    return output;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2);