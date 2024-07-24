/*
6. Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development
*/

const getLongestWord = s => {
  return s.split(' ').reduce((longest, word) => 
    word?.length > longest?.length ? word : longest
  , '');
}

// Test cases
console.log(getLongestWord('Web Development Tutorial')); // Expected: 'Development'
console.log(getLongestWord('The quick brown fox jumps over the lazy dog')); // Expected: 'quick'
console.log(getLongestWord('Hello world')); // Expected: 'Hello'
console.log(getLongestWord('JavaScript is awesome')); // Expected: 'JavaScript'
console.log(getLongestWord('a b c d e')); // Expected: 'a' (first occurrence)
console.log(getLongestWord('')); // Expected: ''
