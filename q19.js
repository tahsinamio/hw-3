/*
19. Write a JavaScript function that returns array elements larger than a number. 
*/

const elementsLargerThan = (arr, num) => {
    return arr.filter(n => n > num);
};

// Test cases
console.log(elementsLargerThan([1, 2, 3, 4, 5], 3)); // Expected output: [4, 5]
console.log(elementsLargerThan([10, 20, 30, 40], 25)); // Expected output: [30, 40]
console.log(elementsLargerThan([5, 6, 7, 8], 8)); // Expected output: []
console.log(elementsLargerThan([1, 1, 1, 1], 0)); // Expected output: [1, 1, 1, 1]