/*
25. Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/

const longestCountryName = (countries) => {
  let res = '';

  countries.forEach(country => {
    if (country.length > res.length) res = country;
  });

  return res;
};

// Test cases
console.log(longestCountryName(["Australia", "Germany", "United States of America"])); // Expected output: "United States of America"
console.log(longestCountryName(["Canada", "Mexico", "Brazil"])); // Expected output: "Canada"
console.log(longestCountryName(["Japan", "China", "South Korea"])); // Expected output: "South Korea"
console.log(longestCountryName([])); // Expected output: ''
console.log(longestCountryName(["Peru", "Chile", "Spain", "Iran"])); // Expected output: "Chile" or "Peru" or "Spain" (all have 4 characters)
