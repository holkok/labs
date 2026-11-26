const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All arguments in pipe must be functions');
    }
  }

  return (x) => {
    let result = x;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
};

// Пример проверки
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5)); // 1728

const f2 = pipe(inc, inc);
console.log(f2(7));