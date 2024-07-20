/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/

const sortedString = s => {
  return s.split('').sort().join('');
}

// tests
console.log(sortedString('webmaster')); // Expected: 'abeemrstw'
console.log(sortedString('javascript')); // Expected: 'aacijprstv'
console.log(sortedString('alphabetical')); // Expected: 'aaabcehillpt'
console.log(sortedString('programming')); // Expected: 'aggimmnoprr'
console.log(sortedString('openai')); // Expected: 'aeinop'
console.log(sortedString('')); // Expected: ''
console.log(sortedString('a')); // Expected: 'a'
console.log(sortedString('zyxwvutsrqponmlkjihgfedcba')); // Expected: 'abcdefghijklmnopqrstuvwxyz'