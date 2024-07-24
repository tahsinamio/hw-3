/*
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1
*/

const amountToCoins = (amount, coins) => {
    const res = [];
    let i = 0;

    while (amount != 0) {
      if ((amount - coins[i]) >= 0) {
        amount -= coins[i];
        res.push(coins[i]);
      } else i++;
    }
    
    return res;
};

// Test cases
console.log(amountToCoins(46, [25, 10, 5, 2, 1])); // Expected output: [25, 10, 10, 1]
console.log(amountToCoins(87, [50, 25, 10, 5, 1])); // Expected output: [50, 25, 10, 1, 1]
console.log(amountToCoins(0, [25, 10, 5, 2, 1])); // Expected output: []
console.log(amountToCoins(3, [2, 1])); // Expected output: [2, 1]