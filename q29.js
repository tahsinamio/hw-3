/*
29. Write a JavaScript function to get the function name. 
*/

const getFunctionName = (func) => {
  return func.name || "(anonymous)";
};

// Test cases
console.log(getFunctionName(function testFunction() {})); // Expected output: "testFunction"
console.log(getFunctionName(() => {})); // Expected output: (anonymous)
console.log(getFunctionName(Math.max)); // Expected output: "max"
console.log(getFunctionName(getFunctionName)); // Expected output: "getFunctionName"
