/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/

const checkPrime = num => {
  if (num < 2 || !Number.isInteger(num)) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// Test cases
console.log(checkPrime(1));   // Should return false
console.log(checkPrime(2));   // Should return true
console.log(checkPrime(3));   // Should return true
console.log(checkPrime(4));   // Should return false
console.log(checkPrime(17));  // Should return true
console.log(checkPrime(25));   // Should return false
console.log(checkPrime(97));   // Should return true
console.log(checkPrime(100));  // Should return false