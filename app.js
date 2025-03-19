/*
  ✨ Code Review & Refactor Suggestions ✨
  Awesome work on using arrays and loops! The suggestions below show different ways to improve readability, 
  optimize performance, and follow best practices. Keep in mind that what matters most is getting a working 
  solution—reviewing refactored code just helps make you a stronger developer over time! 🚀
*/

// ✅ Exercise 2: Add strings to the array
// Great job initializing and adding items to an array!
const foods = ["pizza", "cheeseburger"];
console.log("Exercise 2 result:", foods);

// ✅ Exercise 3: Insert at the beginning
// Good use of `unshift()`! This method efficiently adds elements at the start.
foods.unshift("taco");
console.log("Exercise 3 result:", foods);

// ✅ Exercise 4: Access an array element
// Best practice: Always declare variables with `const` or `let` to avoid global scope issues.
const favFood = foods[1]; // Changed `favFood` from an undeclared variable.
console.log("Exercise 4 result:", favFood);

// ✅ Exercise 5: Insert an element between two others
// Nice use of `.splice()`! Small fix: Consistent variable naming style.
const tofu = "tofu"; // Fixed inconsistent casing
foods.splice(2, 0, tofu);
console.log("Exercise 5 result:", foods);

// ✅ Exercise 6: Replace elements
// Great work using `splice()`! Fixed inconsistent variable casing.
const cupcake = "cupcake";
const sushi = "sushi";
foods.splice(1, 1, sushi, cupcake);
console.log("Exercise 6 result:", foods);

// ✅ Exercise 7: Using the `slice()` method
// Excellent use of `.slice()` to extract a portion of the array!
const yummy = foods.slice(1, 3);
console.log("Exercise 7 result:", yummy);

// ✅ Exercise 8: Finding an index
// `.indexOf()` is a great choice! Well done.
const soyIdx = foods.indexOf("tofu");
console.log("Exercise 8 result:", soyIdx);

// ✅ Exercise 9: Joining elements
// Nice use of `.join()`! The arrow separator makes the output clear.
const allFoods = foods.join(" -> ");
console.log("Exercise 9 result:", allFoods);

// ✅ Exercise 10: Check for an element
// `.includes()` is a clean way to check for values in an array.
const hasSoup = foods.includes("soup");
console.log("Exercise 10 result:", hasSoup);

// ✅ Exercise 11: Odd numbers from an array
// Great job looping through the array! This can be simplified with `.filter()`.
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Using `.filter()` makes this cleaner and more efficient
const odds = nums.filter((num) => num % 2 !== 0);
console.log("Exercise 11 result:", odds);

// ✅ Exercise 12: FizzBuzz with arrays
// Great effort! There's a small issue: The loop should run `i < nums.length`, not `i <= nums.length`.
let fizz = [];
let buzz = [];
let fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
  // Fixed loop boundary
  let number = nums[i];

  if (number % 5 === 0 && number % 3 === 0) {
    fizzbuzz.push(number);
  } else if (number % 5 === 0) {
    // Changed condition order to avoid duplicate pushes
    buzz.push(number);
  } else if (number % 3 === 0) {
    fizz.push(number);
  }
}

console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

// ✅ Exercise 13: Retrieve the last array
// Nice use of `.length - 1`! Here's a slightly cleaner way using `.at(-1)`.
const numArray = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];

// `.at(-1)` is a modern way to access the last element
const numList = numArray.at(-1);
console.log("Exercise 13 result:", numList);

// ✅ Exercise 14: Accessing within nested arrays
// Well done using double indexing to access a nested element!
const num = numArray[2][1];
console.log("Exercise 14 result:", num);

// ✅ Exercise 15: Nested array sum
// Great work summing nested arrays! Here's a more concise approach using `.flat()`
const total = numArray.flat().reduce((sum, num) => sum + num, 0);
console.log("Exercise 15 result:", total);
