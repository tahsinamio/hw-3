/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
*/

const countVowels = s => {
  const vowelSet = new Set('aeiou')
  
  return s.split('').reduce((count, char) => 
    vowelSet.has(char.toLowerCase()) ? count + 1 : count
  , 0);
}

// tests
console.log(countVowels('The quick brown fox')); // Expected: 5
console.log(countVowels('Hello World')); // Expected: 3
console.log(countVowels('aeiou')); // Expected: 5
console.log(countVowels('rhythm')); // Expected: 0
console.log(countVowels('AEIOU')); // Expected: 5 
console.log(countVowels('')); // Expected: 0