/*
17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
*/

const getLetterOccurrences = (str) => {
  const strMap = new Map();
  str.split('').forEach(s => {
    if (strMap.has(s)) strMap.set(s, strMap.get(s) + 1);
    else strMap.set(s, 1);
  });
  
  return Object.fromEntries(strMap);
};

// Test cases
console.log(getLetterOccurrences("hello")); // Expected output: { h: 1, e: 1, l: 2, o: 1 }
console.log(getLetterOccurrences("test"));  // Expected output: { t: 2, e: 1, s: 1 }
console.log(getLetterOccurrences(""));      // Expected output: {}