
/*
Assignment 5: Problem 4 - Turn in the following array of arrays into a single object.
The first element in each array is the key, and the second element is the value.

You will also be asked to omit an element from the array.

For example, the following array:

const items = [
	  [ 'name', 'Ford' ],
	  [ 'model', 'Mustang' ],
	  [ 'year', 1964 ], 	// Omit this element
	  [ 'color', 'red' ]
]

Should be turned into the following object:
{
	name: 'Ford',
	model: 'Mustang',
	color: 'red'
}

TO TEST:
You can run this example by running `node problems/problem-4` in your terminal,
or you can run all by running `node run-all`.
*/

const { test } = require('../tester')

const items = [
	  [ 'firstName', 'Luke' ],
	  [ 'lastName', 'Skywalker' ],
	  [ 'age', 19 ],
	  [ 'occupation', 'Jedi' ],
	  [ 'homePlanet', 'Tatooine' ]
]

// Omit the 'age' element

 // append your code here
 // create an empty object 'person' to store the key-value pairs.
const person = {};

//  use the forEach method to iterate through each sub-array
items.forEach(item => {
	const [key, value] = item;
	//If the key is not equal to 'age', we add the key-value pair to the person object
	if (key !== 'age') {
	  person[key] = value;
	}
  });

test("Problem 4", person)