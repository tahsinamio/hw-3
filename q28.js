/*
28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/

const passFunctionAsParameter = (func) => {
  return func(27);
};

// Test cases
console.log(passFunctionAsParameter(() => {})); // Test with an empty function
console.log(passFunctionAsParameter((x) => x * 2)); // Test with a simple function
console.log(passFunctionAsParameter(Math.sqrt)); // Test with a built-in function
