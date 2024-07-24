/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '
*/

const capitalizeFirstLetters = s => {
  const res = []

  s.split(' ').forEach(w => {
    res.push(w.charAt(0).toUpperCase() + w.slice(1));
  });

  return res.join(' ');
}

// Tests
console.log(capitalizeFirstLetters('the quick brown fox'));
console.log(capitalizeFirstLetters('hello world'));
console.log(capitalizeFirstLetters('javascript is awesome'));
console.log(capitalizeFirstLetters('a b c d'));
console.log(capitalizeFirstLetters(''));