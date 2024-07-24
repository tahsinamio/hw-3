/*
18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value.
*/

const binarySearch = (arr, target) => {
    if (arr.length === 0) return false;

    const mid = Math.floor(arr.length / 2);

    if (arr[mid] === target) return true;

    if (arr[mid] > target) {
      return binarySearch(arr.slice(0, mid), target);
    } else {
      return binarySearch(arr.slice(mid + 1), target);
    }
};

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Expected output: true
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Expected output: false
console.log(binarySearch([], 1)); // Expected output: false