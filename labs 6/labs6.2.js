const { EventEmitter } = require('node:events');

const compose = (...fns) => {
  const emitter = new EventEmitter();

  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All arguments in compose must be functions');
    }
  }

  const composed = (x) => {
    let result = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = fns[i](result);
      } catch (err) {
        emitter.emit('error', err);
        return undefined;
      }
    }
    return result;
  };

  composed.on = (eventName, listener) => {
    emitter.on(eventName, listener);
    return composed;
  };

  return composed;
};

// Пример использования
const inc = (x) => ++x;
const boom = () => {
  throw new Error('Something went wrong');
};

const f = compose(inc, boom, inc);

f.on('error', (err) => {
  console.error('Caught error:', err.message);
});

const res = f(5);
console.log(res);