/*
3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g
*/

const stringCombination = s => {
  const res = new Set();
  
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      res.add(s.substring(i, j));
    }
  }

  return Array.from(res);
}

// Test cases
console.log("Test case 1: 'dog'");
console.log(stringCombination('dog'));
// Expected: ['d', 'do', 'dog', 'o', 'og', 'g']

console.log("\nTest case 2: 'a'");
console.log(stringCombination('a'));
// Expected: ['a']

console.log("\nTest case 3: ''");
console.log(stringCombination(''));
// Expected: []

console.log("\nTest case 4: 'aa'");
console.log(stringCombination('aa'));
// Expected: ['a', 'aa']

console.log("\nTest case 5: 'hello'");
console.log(stringCombination('hello'));
// Expected: ['h', 'he', 'hel', 'hell', 'hello', 'e', 'el', 'ell', 'ello', 'l', 'll', 'llo', 'l', 'lo', 'o']