/*
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result.
*/

const computeExponent = (b, n) => {
    return Math.pow(b, n)
};

// Test cases
console.log(computeExponent(2, 3)); // Expected output: 8
console.log(computeExponent(5, 2)); // Expected output: 25
console.log(computeExponent(7, 0)); // Expected output: 1
console.log(computeExponent(10, 1)); // Expected output: 10