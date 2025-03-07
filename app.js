// Exercise 2: Add strings to the array*/

const foods = [];
foods[0] = "pizza";
foods[1] = "cheeseburger";
console.log("Exercise 2 result:", foods);

//Exercise 3: Insert at the begining */
foods.unshift("taco");
console.log("Exercise 3 result:", foods);

// Exercise 4: Access an array element */
favFood = foods[1];
console.log("Exercise 4 result", favFood);

// Exercise 5: Insert an element between two others */
const toFu = "tofu";
let index = 2;
foods.splice(2, 0, toFu);
console.log("Exercise 5 result", foods);

//Exercise 6: Replace elements */
const cupcAKE = "cupcake";
const suSHI = "sushi";
let index1 = 1;
foods.splice(index1, 1, suSHI, cupcAKE);
console.log("Exercise 6 result:", foods);

//Exercise 7: using the slice() method */
const yummy = foods.slice(1, 3);
console.log("Exercise 7 result:", yummy);

//Exercise 8: Finding an index */
const soyIdx = foods.indexOf("tofu");
console.log("Exercise 8 result:", soyIdx);

//Exercise 9: Joining elements */
const allFoods = foods.join(" -> ");
console.log("Exercise 9 result:", allFoods);

//Exercise 10: Check for an element */
const hasSOUP = foods.includes("soup");
console.log("Exercise 10 result:", hasSOUP);

//Exercise 11: Odd numbers from an array */
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

for (let i = 0; i < nums.length; i++) {
  let number = nums[i];
  if (number % 2 > 0) {
    odds.push(number);
  } else {
    undefined;
  }
}
console.log("Exercise 11 result:", odds);

//Exercise 12: FizzBuzz with arrays */
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
let fizz = [];
let buzz = [];
let fizzbuzz = [];
for (let i = 0; i <= nums.length; i++) {
  let number = nums[i];
  if (number % 5 === 0 && number % 3 === 0) {
    fizzbuzz.push(number);
  }
  if (number % 5 === 0) {
    buzz.push(number);
  }
  if (number % 3 === 0) {
    fizz.push(number);
  } else {
    undefined;
  }
}
console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

/Exercise 13: Retrieve the last array */;
let numList = [];
const numArray = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];
numList = numArray[numArray.length - 1];
console.log("Exercise 13 result:", numList);

// /Exercise 14: Accessing within nested arrays */
//let num = []
const numArray = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];

num = numArray[2][1];
console.log("Exercise 14 result:", num);

//Exercise 15: Nested array sum
let total = 0;
for (let i = 0; i < numArray.length; i++) {
  let firstArray = numArray[i];
  for (let j = 0; j < firstArray.length; j++) {
    total += firstArray[j];
  }
}

console.log("Exercise 15 result:\n", total);
