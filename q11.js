/*
11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4
*/

const findSecondLowestAndGreatest = (nums) => {
  if (nums.length < 2) return [];
  const sortedNums = [...new Set(nums)].sort((a, b) => a - b);
  return sortedNums.length >= 2
    ? [sortedNums[1], sortedNums[sortedNums.length - 2]]
    : [nums[0], nums[0]];
};

// Test cases
console.log(findSecondLowestAndGreatest([1, 2, 3, 4, 5])); // Expected: [2, 4]
console.log(findSecondLowestAndGreatest([5, 2, 8, 1, 9])); // Expected: [2, 8]
console.log(findSecondLowestAndGreatest([10, 10, 10, 10])); // Expected: [10, 10]
console.log(findSecondLowestAndGreatest([1, 1, 2, 2, 3, 3])); // Expected: [2, 2]
console.log(findSecondLowestAndGreatest([-1, 0, 5, -5, 3])); // Expected: [-1, 3]
console.log(findSecondLowestAndGreatest([100])); // Expected: null
console.log(findSecondLowestAndGreatest([])); // Expected: null