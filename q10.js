/*
10. Write a JavaScript function which returns the n rows by n columns identity matrix.
*/

const createIdentityMatrix = n => {
  const res = [];

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      if (i === j) row.push(1);
      else row.push(0);
    }
    res.push(row);
  }

  return res;
}

// Test cases
console.log(createIdentityMatrix(2));
// Expected output: [[1, 0], [0, 1]]

console.log(createIdentityMatrix(3));
// Expected output: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

console.log(createIdentityMatrix(4));
// Expected output: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]

console.log(createIdentityMatrix(1));
// Expected output: [[1]]

console.log(createIdentityMatrix(0));
// Expected output: []