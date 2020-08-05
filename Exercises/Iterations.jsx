//.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

//.map() executes the same code on every element in an array and returns a new array with the updated elements.

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

// .forEach() will execute the same code for each element of an array.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruit => {
    console.log(' I want to eat a' + fruit +'.');
  });

  fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))

  // Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. 
  // However, .filter() returns an array of elements after filtering out certain elements from the original array. 
  // The callback function for the .filter() method should return true or false depending on the element that is passed to it. 
  // The elements that cause the callback function to return true are added to the new array.

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

// Observe how words was not mutated, i.e. changed, and shortWords is a new array.

// Call the .filter() method on randomNumbers to return values that are less than 250.
// Save them to a new array called smallNumbers, declared with const.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})

// Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. 
// Save the returned array to a const variable named longFavoriteWords

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

// Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
// .findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. 
// It returns -1 if none of the elements in the array satisfies the condition.

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Output: 3 
console.log(jumbledNums[3]); // Output: 5

// If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1

// Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant'
// Save the returned value to a const variable named foundAnimal.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal  = animals.findIndex(word =>{


});
 console.log(foundAnimal);

 // Let’s see if we can find the index of the first animal that starts with the letter 's'.

 const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

console.log(startsWithS);

// The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

// The .reduce() method can also take an optional second parameter to set an initial value for accumulator.

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117

// Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array.

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));
