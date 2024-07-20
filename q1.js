/*
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 
*/

const reverseNumber = num => {
  const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
  return num < 0 ? -reversed : reversed;
}

// Tests
console.log(reverseNumber(32243)); // Expected: 34223
console.log(reverseNumber(12345)); // Expected: 54321
console.log(reverseNumber(100));   // Expected: 1
console.log(reverseNumber(1000));  // Expected: 1
console.log(reverseNumber(9876543210)); // Expected: 123456789
console.log(reverseNumber(-12345)); // Expected: -54321