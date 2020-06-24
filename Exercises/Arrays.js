//Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). 
//Like lists, arrays are ordered, meaning each item has a numbered position.
// Arrays are lists that store data in JavaScript. They are created with brackets [].


let concepts = ['creating arrays', 'array structures', 'array manipulation']

// The first item within an array is always at position [0].

const alphabet = ['a', 'b', 'c'];
// We can access one item in an array using its index, with syntax like: myArray[0].
const firstLetter = alphabet[0]; // 'a'

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings [0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]); // When you try to access an index in an array that does not contain an element you will get a value of undefined.

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

// Once you have access to an element in an array, you can update its value.
// We can change an item in an array using its index, with syntax like myArray[0] = 'new string';

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList [1] = 'avocados';
console.log(groceryList);

// Variables declared with let can be reassigned
// Variables declared with the const keyword cannot be reassigned

// Reassign condiments to be a new array that contains a single string ['Mayo']
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments = ['Mayo'];
console.log(condiments);


// An array’s built-in properties is length and it returns the number of items in the array

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions.length);
// Output: 2

// When we want to know how many elements are in an array, we can access the .length property.

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// .push() allows us to add items to the end of an array. Here is an example of how this is used:

const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// You might also see .push() referred to as a destructive array method since it changes the initial array.

// .pop(), removes the last item of an array.

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

// .pop() does not take any arguments, it simply removes the last element of newItemTracker.

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]

console.log(removed); // .pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
// Output: item 2

// Use the .pop() method to remove the last element from chores.


const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop()

// There are many more array methods than just .push() and .pop(). 
// You can read about all of the array methods that exist on the Mozilla Developer Network (MDN) array documentation.
// Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. 
// Using these built-in methods make it easier to do some common tasks when working with arrays.

// .indexOf() returns the index of the element in the array, given that the element in the array.

const errands = ['Go to the bank', 'Pick up dry cleaning', 'Go grocery shopping'];

const topPriority = errands.indexOf('Pick up dry cleaning');

// Use the .shift() method to remove the first item from the array groceryList.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

//  Use the .unshift() method to add 'popcorn' to the beginning of your grocery list.

groceryList.unshift('popcorn');
console.log(groceryList);

// You want to pick up the 'bananas', 'coffee beans', and 'brown rice'.
console.log(groceryList.slice(1, 4));

//Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.
const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well.
// You might also see this concept explained as pass-by-reference.
// What we’re actually passing the function is a reference to where the variable memory is stored and changing the memory.
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

// Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3]. 
// If we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
// We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.
console.log(nestedArr[1][0]); // Output: 2

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

//.slice() will not mutate the array it was called on.
// array.splice(indexToStart, numberOfIndices, 'stringToAdd');
secretMessage.splice(6,5, 'know');
// console.log(secretMessage);
// Use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(' '));

// Output is:
// Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to program

