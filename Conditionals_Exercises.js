let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operator
// In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.
// conditional ? action if truthy : action if falsy

let isNightTime = true;
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//if statement

const isMailSent = true;
if (isMailSent) {
console.log('Mail sent to recipient');
}

// Else If Statements
// The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

//else Statement
const isTaskCompleted = false;
if (isTaskCompleted) {
console.log('Task completed');
} else {
console.log('Task incomplete');
}

//else if statements are a great tool if we need to check multiple conditions.
//imagine if we needed to check 100 different values! Having to write that many else if statements sounds like a pain!
// A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'

// The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. 
// The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block.