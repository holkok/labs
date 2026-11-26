'use strict';

const iterate = (object, callback) => {
  const propNames = Object.keys(object);
  for (let i = 0; i < propNames.length; i++) {
    const key = propNames[i];
    callback(key, object[key], object);
  }
};

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});