function seq(...args) {
  const fns = [...args];

  return function next(arg) {
    if (typeof arg === 'number') {
      return fns.reduceRight((acc, fn) => fn(acc), arg);
    }

    if (typeof arg === 'function') {
      fns.push(arg);
    }

    return next;
  };
}