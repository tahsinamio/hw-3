/*
20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample   character   list:
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/

const generateRandomId = (length) => {
  const charList =
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const getRandomChar = () =>
    charList.charAt(Math.floor(Math.random() * charList.length));
  return Array(length).fill(null).map(getRandomChar).join('')
};

// Test cases
console.log(generateRandomId(8));  // Expected output: Random string of 8 characters
console.log(generateRandomId(12)); // Expected output: Random string of 12 characters
console.log(generateRandomId(16)); // Expected output: Random string of 16 characters
console.log(generateRandomId(0));  // Expected output: Empty string or appropriate handling
