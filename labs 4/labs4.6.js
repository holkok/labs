const max = (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return undefined;
  }

  let maxVal = matrix[0][0];
  for (const row of matrix) {
    for (const value of row) {
      if (value > maxVal) {
        maxVal = value;
      }
    }
  }
  return maxVal;
};

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);