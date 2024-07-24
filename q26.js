/*
26. Write a JavaScript function to find longest substring in a given a string without repeating
characters.
*/

const longestSubstringWithoutRepeating = (str) => {
  let res = '';
  let left = 0;
  const strSet = new Set();

  for (let right = 0; right < str.length; right++) {
    while (strSet.has(str.charAt(right))) {
      strSet.delete(str.charAt(left));
      left++;
    }
    strSet.add(str.charAt(right));
    if ((right - left + 1) > res.length) {
      res = str.substring(left, right + 1);
    }
  }

  return res;
};

// Test cases
console.log(longestSubstringWithoutRepeating("abcabcbb")); // Expected output: "abc"
console.log(longestSubstringWithoutRepeating("bbbbb")); // Expected output: "b"
console.log(longestSubstringWithoutRepeating("pwwkew")); // Expected output: "wke"
console.log(longestSubstringWithoutRepeating("")); // Expected output: ""
console.log(longestSubstringWithoutRepeating("dvdf")); // Expected output: "vdf"