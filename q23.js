/*
23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 
*/

const findFirstNonRepeatedChar = (str) => {
  const strMap = new Map();
  const strArr = str.split('');
  strArr.forEach(l => {
    if (strMap.has(l)) strMap.set(l, strMap.get(l) + 1);
    else strMap.set(l, 1);
  })

  for (let i = 0; i < strArr.length; i++) {
    if (strMap.get(strArr[i]) === 1) return strArr[i];
  }

  return null;
};

// Test cases
console.log(findFirstNonRepeatedChar('abacddbec')); // Expected output: 'e'
console.log(findFirstNonRepeatedChar('abcdef')); // Expected output: 'a'
console.log(findFirstNonRepeatedChar('aabbcc')); // Expected output: null
console.log(findFirstNonRepeatedChar('aabbccdeeff')); // Expected output: 'd'
console.log(findFirstNonRepeatedChar('')); // Expected output: null