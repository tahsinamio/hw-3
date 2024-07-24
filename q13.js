/*
13. Write a JavaScript function to compute the factors of a positive integer. 
*/

const computeFactors = n => {
  const factors = [];

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) factors.push(i)
  }

  factors.push(n);
  return factors;
}

// Test cases
console.log(computeFactors(1)); // [1]
console.log(computeFactors(6)); // [1, 2, 3, 6]
console.log(computeFactors(15)); // [1, 3, 5, 15]
console.log(computeFactors(28)); // [1, 2, 4, 7, 14, 28]
console.log(computeFactors(100)); // [1, 2, 4, 5, 10, 20, 25, 50, 100]