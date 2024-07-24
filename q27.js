/*
27. Write a JavaScript function that returns the longest palindrome in a given string.
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
given string that is also a palindrome. For example, the longest palindromic substring of
"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
example, in the string "abracadabra", there is no palindromic substring with length greater than
three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all
substrings that are themselves palindromes and cannot be extended to larger palindromic
substrings) rather than returning only one substring or returning the maximum length of a
palindromic substring.
*/

const longestPalindrome = (str) => {
  if (str.length < 2) return str;

  let start = 0, maxLength = 1;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < str.length; i++) {
    const len1 = expandAroundCenter(i, i); // Odd length palindromes
    const len2 = expandAroundCenter(i, i + 1); // Even length palindromes
    const len = Math.max(len1, len2);

    if (len > maxLength) {
      start = i - Math.floor((len - 1) / 2);
      maxLength = len;
    }
  }

  return str.substring(start, start + maxLength);
};

const isPalindrome = str => {
  return str === str.split('').reverse().join('');
}

// Test cases
console.log(longestPalindrome("bananas")); // Expected output: "anana"
console.log(longestPalindrome("abracadabra")); // Expected output: "aca" or "ada"
console.log(longestPalindrome("cbbd")); // Expected output: "bb"
console.log(longestPalindrome("a")); // Expected output: "a"
console.log(longestPalindrome("ac")); // Expected output: "a" or "c"