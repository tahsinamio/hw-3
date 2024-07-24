/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o'
Expected output: 3
*/

const countLetterOccurrences = (str, letter) => {
  return str.split('').filter(l => l === letter).length;
};

// Test cases
console.log(countLetterOccurrences('microsoft.com', 'o')); // Expected output: 3
console.log(countLetterOccurrences('javascript', 'a')); // Expected output: 2
console.log(countLetterOccurrences('hello world', 'l')); // Expected output: 3
console.log(countLetterOccurrences('programming', 'z')); // Expected output: 0
console.log(countLetterOccurrences('', 'a')); // Expected output: 0
