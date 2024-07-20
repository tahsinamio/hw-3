/*
2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run.
*/

const checkPalindrome = s => {
  const cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

// tests
console.log(checkPalindrome("madam")); // true
console.log(checkPalindrome("nurses run")); // true
console.log(checkPalindrome("A man a plan a canal Panama")); // false
console.log(checkPalindrome("race a car")); // false
console.log(checkPalindrome("Was it a car or a cat I saw")); // false
console.log(checkPalindrome("")); // true
console.log(checkPalindrome("a")); // true
console.log(checkPalindrome("ab")); // false