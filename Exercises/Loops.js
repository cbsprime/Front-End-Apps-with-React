// Loops iterate or repeat an action until a specific condition is met. 
// When the condition is met, the loop stops and the computer moves on to the next part of the program.

// Write your code below
const vacationSpots = ['Rome','Copenhagen', 'Oslo'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//  Now imagine that the vacation list had 100 places on it— logging each array element to the console by hand would be a tedious task! 
// In the next exercise, we will learn how to make things more efficient with for loops.

//The for loop syntax looks like this:

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
  }
// The initialization is let counter = 0, so the loop will start counting at 0.
// The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
// The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. 
// For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
// The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. 
// The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.

// Create a program that loops from 5 to 10 and logs each number to the console.
for (let counter =5; counter<11; counter++)
{
  console.log(counter);
}

// Make a for loop that loops backwards printing 3 to 0.
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// With for loops, it’s easier for us to work with elements in arrays.

for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}
//Output is:
// I would love to visit Bali
// I would love to visit Paris
// I would love to visit Tulum

// Nested Loops
// When we have a loop running inside another loop, we call that a nested loop. 
// One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

// Build a prototype for a mutual followers program
// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. 
// If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// The While Loop

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
// This will be evaluated before each round of the loop. 
// While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

// Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. 
// Rather you’ll eat while you’re hungry. 
// In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.

// declare a variable, don't assign a value
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)]; // Math.floor(Math.random() * 4) will give us a random number from 0 to 3
	console.log(currentCard);
}

// In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. 
///This is where the do...while statement comes in.
// A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. 
// The syntax for a do...while statement looks like this:

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

// Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
} while (cupsAdded < cupsOfSugarNeed)

// When we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, 
// we can use the keyword break. The break keyword allows programs to “break” out of the loop from within the loop’s block.

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

// This is the output for the above code:
// Banana.
// Banana.
// Banana.
//Orange you glad I broke out the loop!

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){ 

  // Since there’s a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.
    break; // Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.
  }
}

console.log("And if you don't know, now you know.");

// Output:
// Lil' Kim
// Jay-Z
// Notorious B.I.G.
// And if you don't know, now you know.

// Each time the outer loop runs, the inner loop completes all iterations.

const animal = 'cat';

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
}

// Output is 'c123a123t123'