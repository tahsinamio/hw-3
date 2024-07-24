/*
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
*/

const extractUniqueCharacters = (str) => {
    return Array.from(new Set(str)).join('');
};

// Test cases
console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog")); // Expected: "thequickbrownfxjmpsvlazydg"
console.log(extractUniqueCharacters("hello")); // Expected: "helo"
console.log(extractUniqueCharacters("javascript")); // Expected: "javscript"