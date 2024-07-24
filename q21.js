/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/

const getSubsets = (arr, length) => {
  if (length <= 0 || length > arr.length) return [];

  const result = [];

  const generateSubsets = (start, current) => {
    if (current.length === length) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      generateSubsets(i + 1, current);
      current.pop();
    }
  };

  generateSubsets(0, []);

  return result.map(subset => subset.reverse());
};

// Test cases
console.log(getSubsets([1, 2, 3], 2)); // Expected output: [[2, 1], [3, 1], [3, 2]]
console.log(getSubsets([1, 2, 3, 4], 2)); // Expected output: [[2, 1], [3, 1], [4, 1], [3, 2], [4, 2], [4, 3]]
console.log(getSubsets([1, 2, 3, 4, 5], 3)); // Expected output: [[3, 2, 1], [4, 2, 1], [5, 2, 1], [4, 3, 1], [5, 3, 1], [5, 4, 1], [4, 3, 2], [5, 3, 2], [5, 4, 2], [5, 4, 3]]
console.log(getSubsets([1, 2], 1)); // Expected output: [[1], [2]]
console.log(getSubsets([1, 2, 3], 3)); // Expected output: [[3, 2, 1]]
