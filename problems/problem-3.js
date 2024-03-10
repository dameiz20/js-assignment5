
/*
Assignment 5: Problem 3 - Turn the following array of numbers into an array of strings.
The strings should include the number and whether it is odd or even.
Remove any zeros and negative numbers from your result, and order the array from smallest to largest.

For example:
const numbers = [ 5, 4, 3, 2, 1, 0, -1, -2 ]

Would result in:
[
	'1 is odd',
	'2 is even',
	'3 is odd',
	'4 is even',
	'5 is odd'
]

You can use the included `isEven` function to determine if a number is even or odd.

TO TEST:
You can run this example by running `node problems/problem-3` in your terminal,
or you can run all by running `node run-all`.
*/

const { test } = require('../tester')

const isEven = number => number % 2 === 0 // returns true if the number is even

const numbers = [ -10, -5, 0, 5, 10, 8, -2 ]

 // append your array methods here
 // Filter out negative and zero numbers
const numberStrings = numbers.filter(num => num > 0)
.map(num => {
	// Determine if the number is even or odd
  const type = num % 2 === 0 ? 'even' : 'odd';
  // Create string in the format "X is odd" or "X is even"
  return `${num} is ${type}`;
})
.sort((a, b) => {
	// Convert first part of string to number for comparison
  const numA = parseInt(a.split(' ')[0]);
  const numB = parseInt(b.split(' ')[0]);
   // Sort the numbers numerically
  return numA - numB;
});

test("Problem 3", numberStrings)