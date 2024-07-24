/*
9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string,
and undefined.
*/

const getType = arg => {
    return typeof arg;
}

// Test cases
console.log(getType(42));                // Should output: "number"
console.log(getType("Hello"));           // Should output: "string"
console.log(getType(true));              // Should output: "boolean"
console.log(getType(undefined));         // Should output: "undefined"
console.log(getType(null));              // Should output: "object"
console.log(getType({}));                // Should output: "object"
console.log(getType([]));                // Should output: "object"
console.log(getType(function() {}));     // Should output: "function"
console.log(getType(new Date()));        // Should output: "object"
console.log(getType(NaN));               // Should output: "number"